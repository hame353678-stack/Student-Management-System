import { courseType } from "@/DataTypes/courseType";
import Link from "next/link";
import DeleteCourse from "@/ServerActions/DeleteCourse";

export default function AdminShowCourses({ course }: { course: courseType }) {
  return (
    <div className="w-full max-w-sm min-h-60 bg-white border rounded-xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg">
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

      <div className="mt-auto flex flex-col sm:flex-row gap-2">
        <form action={DeleteCourse} className="flex-1">
          <input type="hidden" name="id" value={course.id} />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:bg-red-600"
          >
            Delete Course
          </button>
        </form>

        {/* Add New Course */}
      </div>
    </div>
  );
}
