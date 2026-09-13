"use client";

import { useEffect, useState } from "react";
import { QuizeType } from "@/DataTypes/QuizesType";
import ShowQuizes from "@/Components/ShowQuizes";

export default async function Quizes() {
  const [Quizzes, setQuizzes] = useState<QuizeType[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await fetch("/api/Quizzes");
      const fetchedQuizzes = await data.json();

      setQuizzes(fetchedQuizzes);
    };

    fetchQuizzes();
  }, []);
  if (Quizzes) {
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-center bg-cyan-100 text-gray-800 mb-4">
          Quizes
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Quizzes.map((Quize, idx) => (
            <ShowQuizes Quize={Quize} key={idx} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="font-bold text-2xl text-center">Not found any Quize</div>
    );
  }
}
