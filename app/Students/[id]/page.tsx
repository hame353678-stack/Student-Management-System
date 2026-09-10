import { studentType } from "@/DataTypes/studentType";
import ShowStudents from "@/Components/ShowStudent";
import clientPromise from "@/lib/db";

export default async function ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");

  const student: studentType | null = await management.findOne({
    id: parseInt(id),
  });

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
        <div className="bg-white p-8 rounded-xl shadow-md border text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Student Not Found
          </h2>

          <p className="text-gray-500">
            No student was found with ID:{" "}
            <span className="font-semibold text-gray-700">{id}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Student Details
        </h1>

        <ShowStudents student={student} />
      </div>
    </div>
  );
}
