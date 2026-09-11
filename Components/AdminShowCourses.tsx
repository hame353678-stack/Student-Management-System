import { courseType } from "@/DataTypes/courseType";
import Link from "next/link";

export default function AdminShowCourses({ course }: { course: courseType }) {
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

      <div className="mt-auto flex justify-between gap-2">
        <Link
          href={`/ServerAction/DeleteCourse?courseId=${course.id}&courseName=${course.name}&duration=${course.duration}`}
          className="flex-1 text-center bg-blue-500 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:bg-blue-600"
        >
          Delete Course
        </Link>

        <Link
          href={`/AddNewCourse`}
          className="flex-1 text-center bg-blue-500 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:bg-blue-600"
        >
          Add New Course
        </Link>
      </div>
    </div>
  );
}
