import { getProfessorDetails } from "@/app/backend/actions/professors/get-professor-detail";
import { ProfessorProfile } from "@/components/professor/professor-profile";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProfessorProfilePage({ params }: PageProps) {
  // Await the params since they're now a Promise in Next.js 15
  const { id } = await params;
  
  const result = await getProfessorDetails(id);
  
  if (!result.success || !result.details) {
    notFound();
  }

  return <ProfessorProfile details={result.details} />;
}
