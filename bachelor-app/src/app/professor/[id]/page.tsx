import { getProfessorDetails } from "@/app/backend/actions/professors/get-professor-detail";
import { ProfessorProfile } from "@/components/professor/professor-profile";
import { notFound } from "next/navigation";

export default async function ProfessorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getProfessorDetails(id);

  if (!result.success || !result.details) {
    notFound();
  }

  return <ProfessorProfile details={result.details} />;
}
