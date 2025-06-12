// app/api/tags/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '../../prisma/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10)

  const whereClause =
    search.length > 0
      ? { tag_name: { contains: search, mode: 'insensitive' as const } }
      : {};

  const [results, totalCount] = await Promise.all([
    prisma.tag.findMany({
      where: whereClause,
      orderBy: { tag_name: 'asc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.tag.count({ where: whereClause }),
  ])

  return NextResponse.json({
    results: results.map(tag => tag.tag_name),
    totalCount,
    page,
    pageSize,
  })
}
