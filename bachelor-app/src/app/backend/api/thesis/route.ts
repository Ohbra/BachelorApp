// POST /api/thesis
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// role based filtering 
// GET /api/thesis?role=supervisor&userId=1 for example
// all available thesis proposals can be shown to the students / admin 
// supervisor can only see their own thesis proposals
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const role = searchParams.get('role');
  const userId = searchParams.get('userId'); // needed for supervisor filtering

  const whereCondition =
    role === 'supervisor' && userId
      ? { supervisor_id: parseInt(userId, 10) }
      : {};

  const proposals = await prisma.thesis_proposal.findMany({
    where: whereCondition,
    include: {
      thesis_proposal_tag: true,
      supervisor: {
        include: {
          user_parent: true
        }
      }
    }
  });

  return Response.json(proposals);
}


export async function POST(req: Request) {
    try {
    // parse the request body
  const data = await req.json()

  // mock user role
  // TODO: Replace this mock with real role check from Supabase or NextAuth session

  const userRole = data.userRole;

  // Restrict access based on role
    if (userRole !== 'admin' && userRole !== 'supervisor') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
    }

  const proposal = await prisma.thesis_proposal.create({
    //data: {
      //title: data.title,
      //description: data.description,
      //thesis_type: data.thesis_type,
      //supervisor_id: data.supervisorId,
      //application_start: new Date(data.application_start),
      //application_end: new Date(data.application_end),
//
    //}
    // dlkfalsdfj 
    data: {
      title: data.title,
      description: data.description,
      requirements: data.requirements,
      thesis_type: data.thesis_type,
      application_start: data.application_start ? new Date(data.application_start) : null,
      application_end: data.application_end ? new Date(data.application_end) : null,
      thesis_start: data.thesis_start ? new Date(data.thesis_start) : null,
      thesis_end: data.thesis_end ? new Date(data.thesis_end) : null,
      supervisor_id: data.supervisor_id,
      thesis_proposal_tag: {
        create: data.tags?.map((tagName: string) => ({
          tag: {
            connect: { tag_name: tagName }
          }
        })) ?? []
      }
    }
  })
  return Response.json(proposal)

    } catch (error) {
        console.error('Error creating thesis proposal:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
