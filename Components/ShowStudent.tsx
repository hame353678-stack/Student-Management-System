import { type studentType } from "@/DataTypes/studentType";

export default function ShowStudents({ student }: { student: studentType }) {
  return (
    <div className="lg:h-60 lg:w-60 sm:h-30 sm:w-30 bg-white p-4 border rounded-xl shadow-md hover:shadow-lg">
      <p className="font-semibold text-gray-700 mb-2">
        Student : <span className="font-normal">{student.name}</span>
      </p>

      <p className="font-semibold text-gray-700 mb-2">
        RegID : <span className="font-normal">{student.regId}</span>
      </p>

      <p className="font-semibold text-gray-700 mb-2">
        Department : <span className="font-normal">{student.department}</span>
      </p>

      <p className="font-semibold text-gray-700 mb-2">
        Semester : <span className="font-normal">{student.semester}</span>
      </p>

      <p className="font-semibold text-gray-700 mb-2">
        CGPA : <span className="font-normal">{student.CGPA}</span>
      </p>

      <p className="font-semibold text-gray-700">
        Location : <span className="font-normal">{student.Location}</span>
      </p>
    </div>
  );
}
