"use client";
import AdminShowCourses from "@/Components/AdminShowCourses";
import { courseType } from "@/DataTypes/courseType";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Courses() {
  const [courses, setcourses] = useState<courseType[]>([]);
  try {
    useEffect(() => {
      const fetchcourses = async () => {
        const data = await fetch("/api/courses");
        const fetchedcourses = await data.json();
        setcourses(fetchedcourses);
      };
      fetchcourses();
    }, []);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 gap-5 p-5">
        <Link
          href="/AddnewCourse"
          className="flex-1 text-center bg-blue-500 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:bg-blue-600"
        >
          Add New Course
        </Link>
        {courses.map((course: courseType, idx: number) => (
          <AdminShowCourses course={course} key={idx} />
        ))}
      </div>
    );
  } catch (err) {
    console.log(err);

    return (
      <div className="p-5 text-center font-semibold text-gray-600">
        Not found courses
      </div>
    );
  }
}
