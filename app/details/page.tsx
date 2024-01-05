"use client";
import { useQuizDetailsContext } from "@/context/QuizDetailsContext";
import React, { useState } from "react";
import { getQuestions } from "../quiz.service";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { QuestionsAPI } from "../quiz.types";

const Details = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { category, difficulty, setDifficulty, noOfQuestions, setNoOfQuestions, setQuestions } = useQuizDetailsContext();
  const router = useRouter();

  const generateQuestions = () => {
    setIsLoading(true);
    getQuestions(category, difficulty, noOfQuestions)
      .then((data) => {
        setQuestions(data?.results);
        if (data.response_code === 0) router.push("/quiz");
        else {
          let message = "";
          if (data.response_code === 1) message = "Please reduce the number of questions";
          toast.error(message);
        }
      })
      .catch((e: any) => {
        const data: QuestionsAPI = e.response.data;
        let message = "";
        if (data.response_code === 5) message = "Too many requests, wait 5 secs before trying again";
        toast.error(message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[90%] md:w-3/5 lg:w-2/4 2xl:w-1/4 flex flex-col gap-14 bg-themeLight p-10 rounded-lg">
        <h1 className="text-themeDark text-4xl font-bold">Quiz Details</h1>
        <div className="flex flex-col gap-7">
          <div className="flex gap-3 flex-col">
            <p className="text-themeDark text-2xl font-bold">Category</p>
            <p className="text-themeOrange text-xl font-bold capitalize">{category}</p>
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
        {!isLoading && (
          <button
            onClick={generateQuestions}
            className="bg-themeLight py-4 px-8 rounded-full text-xl font-bold text-themeDark hover:scale-105 hover:bg-themeOrange transition-all hover:text-themeLight"
          >
            Start Quiz
          </button>
        )}
        {isLoading && (
          <div className="w-full flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
