import { NextResponse } from 'next/server'
import { prisma } from "@/lib/prisma"

export interface RecommendationItem {
  id: string
  title: string
  matchedTags: string[]
}

export interface Recommendations {
  theses: RecommendationItem[]
  professors: RecommendationItem[]
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const studentId = searchParams.get('studentId')

  if (!studentId || !/^[0-9a-fA-F\-]{36}$/.test(studentId)) {
    return NextResponse.json({ error: 'Invalid or missing studentId' }, { status: 400 })
  }

  try {
    // 1) Fetch student + tags
    const student = await prisma.student.findUnique({
      where: { student_id: studentId },
      include: { student_tag: { select: { tag_name: true } } }
    })
    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }
    const studentTags = student.student_tag.map(t => t.tag_name)
    console.log('▶️ studentTags:', studentTags)

    // 2) Fetch all proposals + tags + supervisor→user_parent
    const proposals = await prisma.thesis_proposal.findMany({
      include: {
        thesis_proposal_tag: { select: { tag_name: true } },
        supervisor: {
          select: {
            user_parent: { select: { name: true, surname: true } }
          }
        }
      }
    })
    console.log(`▶️ loaded ${proposals.length} proposals`)

    if (proposals.length === 0) {
      return NextResponse.json({ theses: [], professors: [] } as Recommendations)
    }

    // 3) Compute DF/IDF for weighting
    const totalDocs = proposals.length
    const dfRecords = await prisma.thesis_proposal_tag.groupBy({
      by: ['tag_name'],
      _count: { thesis_id: true }
    })
    const idf = Object.fromEntries(
      dfRecords.map(r => [r.tag_name, Math.log(totalDocs / r._count.thesis_id)])
    )
    console.log('▶️ IDF map:', idf)

    // 4) Find max tags per doc (for normalization)
    const maxTagCount = Math.max(...proposals.map(p => p.thesis_proposal_tag.length), 1)

    // 5) Score
    type _Scored = {
      id: string
      title: string
      matchedTags: string[]
      supervisorName: string
      score: number
    }
    const scored = proposals.map<_Scored>(p => {
      const tags = p.thesis_proposal_tag.map(t => t.tag_name)
      const matched = tags.filter(t => studentTags.includes(t))

      const rel = tags.length ? matched.length / tags.length : 0
      const absN = matched.length / maxTagCount
      const idfSum = matched.reduce((sum, t) => sum + (idf[t] || 0), 0)
      const idfN = idfSum / (Object.values(idf).reduce((a, b) => a + b, 0) || 1)

      const score = 0.4 * rel + 0.3 * absN + 0.3 * idfN

      return {
        id: p.thesis_id,
        title: p.title,
        matchedTags: matched,
        supervisorName: `${p.supervisor.user_parent.name} ${p.supervisor.user_parent.surname}`,
        score
      }
    })
    console.log('▶️ raw scored:', scored)

    const filtered = scored.filter(r => {
      const keep = r.score > 0 && r.matchedTags.length >= 1
      if (!keep) {
        console.log(`  filtering out "${r.title}" — score=${r.score.toFixed(2)}, tags=${r.matchedTags}`)
      }
      return keep
    })

    const topTheses: RecommendationItem[] = filtered
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(r => ({ id: r.id, title: r.title, matchedTags: r.matchedTags }))

    const profMap = new Map<string, { sum: number, count: number }>()
    for (const r of filtered) {
      const key = r.supervisorName
      const cur = profMap.get(key)
      if (cur) {
        cur.sum += r.score
        cur.count++
      } else {
        profMap.set(key, { sum: r.score, count: 1 })
      }
    }

    const topProfs = Array.from(profMap.entries())
      .map(([name]) => ({
        id: name,
        title: name,
        matchedTags: []
      }))
      .sort((a, b) => {
        const avgA = profMap.get(a.id)!.sum / profMap.get(a.id)!.count
        const avgB = profMap.get(b.id)!.sum / profMap.get(b.id)!.count
        return avgB - avgA
      })
      .slice(0, 5)

    console.log('▶️ topTheses:', topTheses)
    console.log('▶️ topProfs:', topProfs)

    return NextResponse.json({ theses: topTheses, professors: topProfs } as Recommendations)
  }
  catch (err: unknown) {
    console.error('🚨 Recommendation engine error:', err)
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: 'Unexpected server error', details: msg }, { status: 500 })
  }
}