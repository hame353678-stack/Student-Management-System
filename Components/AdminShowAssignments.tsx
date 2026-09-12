import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import Link from "next/link";
import DeleteAssignment from "@/ServerActions/DeleteAssignment";

export default function AddminShowAssignments({
  Assignment,
}: {
  Assignment: AssignmentTypes;
}) {
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
      <p className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
        {Assignment.courseName}
      </p>

      <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-word">
        {Assignment.assignmentTitle}
      </h3>

      <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm sm:text-base">
        <p className="text-slate-600">
          <span className="font-semibold text-slate-800">Instructor:</span>{" "}
          {Assignment.instructorName}
        </p>

        <p className="text-slate-600">
          <span className="font-semibold text-slate-800">Due Date:</span>{" "}
          {Assignment.submissionDate}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-5">
        {/* Delete Assignment */}
        <form action={DeleteAssignment} className="w-full sm:flex-1">
          <input
            type="hidden"
            name="courseName"
            value={Assignment.courseName}
          />

          <input
            type="hidden"
            name="assignmentTitle"
            value={Assignment.assignmentTitle}
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2.5 px-3 rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors"
          >
            Delete Assignment
          </button>
        </form>
      </div>
    </div>
  );
}
