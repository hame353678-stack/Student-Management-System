import { QuizeType } from "@/DataTypes/QuizesType";
import DeleteQuize from "@/ServerActions/DeleteQuize";
import Link from "next/link";

export default function AdminShowQuizes({ Quize }: { Quize: QuizeType }) {
  return (
    <div className="w-80 min-h-60 bg-white border rounded-xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg transition-all duration-200">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
        {Quize.courseName}
      </p>

      <h3 className="text-xl font-bold text-gray-800 tracking-tight">
        {Quize.QuizeTitle}
      </h3>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-semibold text-gray-700">Instructor :</span>{" "}
          <span className="font-normal">{Quize.instructorName}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-700">Conduct :</span>{" "}
          <span className="font-normal">{Quize.Conduct}</span>
        </p>
      </div>

      <form action={DeleteQuize} className="mt-auto flex justify-between gap-2">
        <input type="hidden" name="courseName" value={Quize.courseName} />
        <input type="hidden" name="QuizeTitle" value={Quize.QuizeTitle} />
        <input
          type="hidden"
          name="InstructorName"
          value={Quize.instructorName}
        />

        <button
          type="submit"
          className="flex-1 text-center bg-red-500 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors"
        >
          Delete Quiz
        </button>
      </form>
    </div>
  );
}
