import clientPromise from "@/lib/db";
import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import ShowAssignments from "@/Components/ShowAssignments";

export default async function Assignements() {
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<AssignmentTypes>("Assignments");
  const Assignments: AssignmentTypes[] | null = await management
    .find({})
    .toArray();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="text-xl font-bold text-center text-gray-800 mb-4">
        Assigments
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Assignments.map((Assignment, idx) => (
          <ShowAssignments Assignment={Assignment} key={idx} />
        ))}
      </div>
    </div>
  );
}
