import { getProfessorDetails } from "@/app/backend/actions/professors/get-professor-detail";
import { ProfessorProfile } from "@/components/professor/professor-profile";
import { notFound } from "next/navigation";

export default async function ProfessorProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getProfessorDetails(params.id);

  if (!result.success || !result.details) {
    notFound();
  }

  return <ProfessorProfile details={result.details} />;
}
