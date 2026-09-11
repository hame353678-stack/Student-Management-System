import { AssignmentTypes } from "@/DataTypes/AssignmentType";

export default function ShowAssignments({
  Assignment,
}: {
  Assignment: AssignmentTypes;
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-5 max-w-sm mx-auto my-3 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
        {Assignment.courseName}
      </p>

      <h3 className="text-xl font-extrabold text-slate-800 tracking-tight my-1.5">
        {Assignment.assignmentTitle}
      </h3>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-4 pt-3 border-t border-slate-100 text-sm text-slate-600">
        <p>
          <span className="font-medium text-slate-400">Instructor:</span>{" "}
          {Assignment.instructorName}
        </p>
        <p>
          <span className="font-medium text-slate-400">Due:</span>{" "}
          {Assignment.submissionDate}
        </p>
      </div>
    </div>
  );
}
