import ShowStudents from "@/Components/ShowStudent";
import clientPromise from "@/lib/db";
import { studentType } from "@/DataTypes/studentType";
export default async function Students() {
  try {
    const client = await clientPromise;
    const database = client.db("StudentManagement");
    const management = database.collection<studentType>("Students");
    const students: studentType[] | null = await management.find({}).toArray();

    return (
      <div className="grid grid-cols-3 bg-fuchsia-300 sm:gap-1 md:pag-2 lg:gap-3 sm:2 md:3 lg:p-4 ">
        {students.map((student, idx) => (
          <ShowStudents student={student} key={idx} />
        ))}
      </div>
    );
  } catch (err) {
    console.log(err);
    return <div>Not found students</div>;
  }
}
