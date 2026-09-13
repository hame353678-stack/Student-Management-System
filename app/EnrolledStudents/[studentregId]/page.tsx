import { studentType } from "@/DataTypes/studentType";
import ShowStudents from "@/Components/ShowStudent";
import clientPromise from "@/lib/db";
import { enrollementType } from "@/DataTypes/enrolementType";

export default async function ({
  params,
}: {
  params: Promise<{ studentregId: string[] }>;
}) {
  const { studentregId } = await params;

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<enrollementType>("Enrolements");

  const student: enrollementType | null = await management.findOne({
    studentregId: studentregId,
  });

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Student Not Found
          </h2>

          <p className="text-gray-500">
            No student was found with ID:{" "}
            <span className="font-semibold text-gray-700">{studentregId}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-300 p-5 mb-5">
          <h1 className="text-2xl font-bold text-gray-800">Student Details</h1>

          <p className="text-gray-500 text-sm mt-1">you are loged in</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-300 p-5">
          <ShowStudents student={student} />
        </div>
      </div>
    </div>
  );
}
