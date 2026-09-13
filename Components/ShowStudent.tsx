import { enrollementType } from "@/DataTypes/enrolementType";
import DeleteStudent from "@/ServerActions/DeleteStudent";

export default function ShowStudents({
  student,
}: {
  student: enrollementType;
}) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
        Student Information
      </h2>

      <div className="space-y-3 text-sm sm:text-base">
        <div>
          <p className="font-semibold text-gray-700">Student</p>
          <p className="text-gray-600 break-words">{student.studentname}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">RegID</p>
          <p className="text-gray-600 break-words">{student.studentregId}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Course Name</p>
          <p className="text-gray-600 break-words">{student.courseName}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Course ID</p>
          <p className="text-gray-600">{student.courseId}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Duration</p>
          <p className="text-gray-600">{student.duration}</p>
        </div>
      </div>

      <form action={DeleteStudent} className="mt-5">
        <input type="hidden" name="regId" value={student.studentregId} />

        <input type="hidden" name="name" value={student.studentname} />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-red-600"
        >
          Delete Student
        </button>
      </form>
    </div>
  );
}
