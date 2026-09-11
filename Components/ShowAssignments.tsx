import { AssignmentTypes } from "@/DataTypes/AssignmentType";

export default function ShowAssignments({
  Assignment,
}: {
  Assignment: AssignmentTypes;
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-sm mx-auto my-3 bg-white shadow-sm">
      <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
        {Assignment.courseName}
      </p>

      <h3 className="text-lg font-bold text-gray-800 my-1">
        {Assignment.assignmentTitle}
      </h3>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-3 pt-2 border-t border-gray-100 text-sm text-gray-600">
        <p>
          <span className="font-semibold text-gray-500">Instructor:</span>{" "}
          {Assignment.instructorName}
        </p>
        <p>
          <span className="font-semibold text-gray-500">Due:</span>{" "}
          {Assignment.submissionDate}
        </p>
      </div>
    </div>
  );
}
