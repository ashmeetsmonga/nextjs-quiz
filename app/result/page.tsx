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
          className="w-fit self-center px-8 py-4 bg-themeDark text-themeLight text-xl rounded-full font-semibold hover:bg-themeOrange hover:text-themeLight hover:scale-110 transition-all"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
