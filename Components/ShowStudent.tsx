import { enrollementType } from "@/DataTypes/enrolementType";
import DeleteStudent from "@/ServerActions/DeleteStudent";

export default function ShowStudents({
  student,
}: {
  student: enrollementType;
}) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
        Student Information
      </h2>

      <div className="space-y-2 text-sm sm:text-base">
        <p className="font-semibold text-gray-700">
          Student:{" "}
          <span className="font-normal text-gray-600">
            {student.studentname}
          </span>
        </p>

        <p className="font-semibold text-gray-700">
          RegID:{" "}
          <span className="font-normal text-gray-600">
            {student.studentregId}
          </span>
        </p>

        <p className="font-semibold text-gray-700">
          CourseName:{" "}
          <span className="font-normal text-gray-600">
            {student.courseName}
          </span>
        </p>

        <p className="font-semibold text-gray-700">
          CourseId:{" "}
          <span className="font-normal text-gray-600">{student.courseId}</span>
        </p>

        <p className="font-semibold text-gray-700">
          Duration:{" "}
          <span className="font-normal text-gray-600">{student.duration}</span>
        </p>
      </div>

      <form action={DeleteStudent} className="mt-5">
        <input type="hidden" name="regId" value={student.studentregId} />

        <input type="hidden" name="name" value={student.studentname} />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2.5 px-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-red-600 transition-colors"
        >
          Delete Student
        </button>
      </form>
    </div>
  );
}
