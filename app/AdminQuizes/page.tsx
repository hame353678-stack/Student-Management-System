"use client";

import { useEffect, useState } from "react";
import { QuizeType } from "@/DataTypes/QuizesType";
import AdminShowQuizes from "@/Components/AdminShowQuizes";
import Link from "next/link";

export default function AdminQuizes() {
  const [Quizzes, setQuizzes] = useState<QuizeType[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await fetch("/api/Quizzes");
      const fetchedQuizzes = await data.json();

      setQuizzes(fetchedQuizzes);
    };

    fetchQuizzes();
  }, []);

  if (Quizzes.length > 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-purple-700 text-white rounded-lg p-6 text-center">
            <h1 className="text-3xl font-bold">Quiz Management</h1>

            <p className="mt-2">Manage quizzes for your academy courses</p>
          </div>

          {/* Add Quiz Button */}
          <div className="my-6 text-center">
            <Link
              href="/AddnewQuize"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              + Add New Quiz
            </Link>
          </div>

          {/* Quiz Count */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Available Quizzes
            </h2>

            <p className="text-gray-500 mt-1">
              Total Quizzes: {Quizzes.length}
            </p>
          </div>

          {/* Quiz Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Quizzes.map((Quize, idx) => (
              <AdminShowQuizes Quize={Quize} key={idx} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-700">No Quizzes Found</h2>

        <p className="text-gray-500 mt-2">
          You have not added any quizzes yet.
        </p>

        <Link
          href="/AddnewQuize"
          className="inline-block mt-5 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          Add New Quiz
        </Link>
      </div>
    </div>
  );
}
