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
      <div className="h-200 w-full bg-blue-300 flex justify-center items-center align-center">
        `No student is founded with Id : ${id}`
      </div>
    );
  } else {
    return (
      <div className="h-100 w-full bg-green-300 flex justify-center items-center align-center">
        <ShowStudents student={student} />
      </div>
    );
  }
}
