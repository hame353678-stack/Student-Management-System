"use client";
import { useEffect, useState } from "react";
import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import AddminShowAssignments from "@/Components/AdminShowAssignments";
import Link from "next/link";
export default function Assignements() {
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
