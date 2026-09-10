import { courseType } from "@/DataTypes/courseType";
import Link from "next/link";

export default function ShowCourses({ course }: { course: courseType }) {
  return (
    <div className="w-80 min-h-60 bg-white border rounded-xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg">
      <p className="font-semibold text-gray-700">
        Name : <span className="font-normal">{course.name}</span>
      </p>

      <p className="font-semibold text-gray-700">
        Instructor : <span className="font-normal">{course.instructor}</span>
      </p>

      <p className="font-semibold text-gray-700">
        Duration : <span className="font-normal">{course.duration}</span>
      </p>

      <p className="font-semibold text-gray-700">
        Category : <span className="font-normal">{course.category}</span>
      </p>

      <p className="font-semibold text-gray-700">
        Credits : <span className="font-normal">{course.credits}</span>
      </p>

      <Link
        href={`/AddCourse?courseId=${course.id}&courseName=${course.name}&duration=${course.duration}`}
        className="mt-auto text-center bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600"
      >
        Add Course
      </Link>
    </div>
  );
}
