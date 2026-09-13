"use client";

import ShowStudents from "@/Components/ShowStudent";
import { enrollementType } from "@/DataTypes/enrolementType";
import { useEffect, useState } from "react";

export default function Students() {
  const [students, setstudents] = useState<enrollementType[]>([]);

  useEffect(() => {
    const fetchstudents = async () => {
      const data = await fetch("/api/enrolledStudents");
      const fetcheddata = await data.json();

      setstudents(fetcheddata);
    };

    fetchstudents();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-fuchsia-300 sm:gap-1 md:gap-2 lg:gap-3 sm:p-2 md:p-3 lg:p-4">
      <h1 className="text-center col-span-3 text-2xl font-bold">
        Enrolled Students
      </h1>

      {students.map((student, idx) => (
        <ShowStudents student={student} key={idx} />
      ))}
    </div>
  );
}
