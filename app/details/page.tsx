"use client";
import { useQuizDetailsContext } from "@/context/QuizDetailsContext";
import React from "react";
import { getQuestions } from "../quiz.service";
import { useRouter } from "next/navigation";

const Details = () => {
  const { category, difficulty, setDifficulty, noOfQuestions, setNoOfQuestions, setQuestions } = useQuizDetailsContext();
  const router = useRouter();

  const generateQuestions = () => {
    getQuestions(category, difficulty, noOfQuestions).then((data) => {
      setQuestions(data.results);
      router.push("/quiz");
    });
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/4 flex flex-col gap-14 bg-themeLight p-10 rounded-lg">
        <h1 className="text-themeDark text-4xl font-bold">Quiz Details</h1>
        <div className="flex flex-col gap-7">
          <div className="flex gap-3 flex-col">
            <p className="text-themeDark text-2xl font-bold">Category</p>
            <p className="text-themeOrange text-xl font-bold">{category}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-themeDark text-2xl font-bold">Difficulty</p>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="text-themeOrange text-xl font-semibold outline-none border-none bg-white py-2 px-4 rounded-xl appearance-none cursor-pointer"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-themeDark text-2xl font-bold">No Of Questions</p>
            <select
              value={noOfQuestions}
              onChange={(e) => setNoOfQuestions(parseInt(e.target.value))}
              className="text-themeOrange text-xl font-semibold outline-none border-none bg-white py-2 px-4 rounded-xl appearance-none cursor-pointer"
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
        </div>
        <button onClick={generateQuestions} className="bg-themeLight py-4 px-8 rounded-full text-xl font-bold text-themeDark hover:scale-105 hover:bg-themeOrange transition-all hover:text-themeLight">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Details;
