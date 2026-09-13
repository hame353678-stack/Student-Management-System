import { useEffect, useState } from "react";
import ShowCourses from "@/Components/ShowCourses";
import { courseType } from "@/DataTypes/courseType";

export default async function Courses() {
  const [courses, setcourses] = useState<courseType[]>([]);

  useEffect(() => {
    const fetchcourses = async () => {
      const data = await fetch("/api/courses");
      const fetchedcourses = await data.json();

      setcourses(fetchedcourses);
    };

    fetchcourses();
  }, []);
  if (courses) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 gap-5 p-5">
        {courses.map((course: courseType, idx: number) => (
          <ShowCourses course={course} key={idx} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="p-5 text-center font-semibold text-gray-600">
        Not found courses
      </div>
    );
  }
}
