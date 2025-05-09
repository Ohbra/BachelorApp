// /api/supervisors/route.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const supervisors = await prisma.supervisor.findMany({
    include: {
      user_parent: true  // include email, name, etc.
    }
  });
  return Response.json(supervisors);
}
