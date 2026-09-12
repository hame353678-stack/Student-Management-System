import clientPromise from "@/lib/db";
import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import AddminShowAssignments from "@/Components/AdminShowAssignments";
import Link from "next/link";
export default async function Assignements() {
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<AssignmentTypes>("Assignments");
  const Assignments: AssignmentTypes[] | null = await management
    .find({})
    .toArray();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="text-xl font-bold text-center bg-cyan-100 text-gray-800 mb-4">
        Assigments
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link
          href="/AddnewAssignment"
          className="w-full sm:flex-1 text-center bg-blue-500 text-white py-2.5 px-3 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors"
        >
          Add New Assignment
        </Link>
        {Assignments.map((Assignment, idx) => (
          <AddminShowAssignments Assignment={Assignment} key={idx} />
        ))}
      </div>
    </div>
  );
}
