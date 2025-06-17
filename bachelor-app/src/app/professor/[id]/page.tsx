import { getProfessorDetails } from "@/app/backend/actions/professors/get-professor-detail";
import { notFound } from "next/navigation";

export default async function ProfessorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { success, details } = await getProfessorDetails(id);

  if (!success || !details) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{details.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Department</h2>
            <p className="text-gray-600">{details.department}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Title</h2>
            <p className="text-gray-600">{details.profile}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Research Priorities
            </h2>
            <p className="text-gray-600">{details.researchPriorities}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Subject Area
            </h2>
            <p className="text-gray-600">{details.subjectArea}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
