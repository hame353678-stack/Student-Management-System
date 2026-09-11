import { QuizeType } from "@/DataTypes/QuizesType";

export default function ShowQuizes({ Quize }: { Quize: QuizeType }) {
  return (
    <div className="border-2 border-red-500 rounded-xl p-5 max-w-sm mx-auto my-3 bg-green-300 hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <p className="text-xs font-bold text-shadow-blue-500 uppercase tracking-wider">
        {Quize.courseName}
      </p>

      <h3 className="text-xl font-extrabold text-slate-800 tracking-tight my-1.5">
        {Quize.QuizeTitle}
      </h3>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-4 pt-3 border-t border-slate-100 text-sm text-slate-600">
        <p>
          <span className="font-medium text-slate-400">Instructor:</span>{" "}
          {Quize.instructorName}
        </p>
        <p>
          <span className="font-medium text-slate-400">Due:</span>{" "}
          {Quize.Conduct}
        </p>
      </div>
    </div>
  );
}
