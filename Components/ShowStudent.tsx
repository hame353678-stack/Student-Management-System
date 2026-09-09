import { type studentType } from "@/DataTypes/studentType";

export default function ShowStudents({ student }: { student: studentType }) {
  return (
    <div className="h-60 w-60 bg-green-400 p-2 border-2">
      <p className="font-semibold">Sdudent : {student.name}</p>
      <p className="font-semibold">RegID : {student.regId}</p>
      <p className="font-semibold">Department : {student.department}</p>
      <p className="font-semibold">Semester : {student.semester}</p>
      <p className="font-semibold">CGPA : {student.CGPA}</p>
      <p className="font-semibold">Location : {student.Location}</p>
    </div>
  );
}
