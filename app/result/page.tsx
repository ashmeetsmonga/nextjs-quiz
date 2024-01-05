"use client";
import { useQuizDetailsContext } from "@/context/QuizDetailsContext";
import { useRouter } from "next/navigation";
import React from "react";

const Result = () => {
  const { score } = useQuizDetailsContext();
  const router = useRouter();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/4 flex flex-col gap-14 bg-themeLight p-10 rounded-lg">
        <h1 className="text-themeDark text-4xl font-bold">Result</h1>
        <div className="flex flex-col gap-7">
          <div className="flex gap-3 items-center">
            <p className="text-themeDark text-2xl font-bold">Your Score is: </p>
            <p className="text-themeOrange text-4xl font-bold capitalize">{score}</p>
          </div>
        </div>
        <button
          onClick={() => router.push("/")}
          className="bg-themeLight py-4 px-8 rounded-full text-xl font-bold text-themeDark hover:scale-105 hover:bg-themeOrange transition-all hover:text-themeLight"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
