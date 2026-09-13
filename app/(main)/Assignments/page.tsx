import { useState, useEffect } from "react";
import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import ShowAssignments from "@/Components/ShowAssignments";

export default async function Assignements() {
  const [Assignments, setcourses] = useState<AssignmentTypes[]>([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const data = await fetch("/api/Assignments");
      const fetchedAssignments = await data.json();

      setcourses(fetchedAssignments);
    };

    fetchAssignments();
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="text-xl font-bold text-center bg-cyan-100 text-gray-800 mb-4">
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
