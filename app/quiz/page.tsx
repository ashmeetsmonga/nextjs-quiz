"use client";
import React, { useEffect, useState } from "react";
import Option from "./components/Option";
import { useQuizDetailsContext } from "@/context/QuizDetailsContext";
import { DURATION, entities } from "./quiz.constants";
import he from "he";

const Quiz = () => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [duration, setDuration] = useState(DURATION);
  const [score, setScore] = useState(0);

  const { questions } = useQuizDetailsContext();

  useEffect(() => {
    let interval: number;
    interval = window.setInterval(() => {
      setDuration((prev) => {
        if (!prev) {
          return prev;
        } else {
          return prev - 10;
        }
      });
    }, 10);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 flex flex-col items-center gap-16 relative">
        <div className="absolute -top-20 right-0 flex gap-2">
          <p className="text-xl font-semibold text-themeDark">Score:</p>
          <p className="text-xl font-bold text-themeOrange">{score}</p>
        </div>
        <h1 className="text-4xl font-bold text-themeDark">
          {questionIdx + 1}. {he.decode(questions[questionIdx].question)}
        </h1>
        <div className="w-full flex justify-center gap-10">
          {[...questions[questionIdx].incorrect_answers, questions[questionIdx].correct_answer].map((option, idx) => (
            <Option
              disabled={duration === 0}
              key={idx}
              name={he.decode(option)}
              isSelected={selectedAnswer === option}
              setSelectedAnswer={setSelectedAnswer}
              isCorrectAnswer={option === questions[questionIdx].correct_answer}
            />
          ))}
        </div>
        <div className="relative w-full flex justify-center mt-20">
          {duration !== 0 && (
            <button
              onClick={() => {
                setDuration(0);
              }}
              disabled={selectedAnswer === ""}
              className="px-8 py-4 bg-themeLight text-themeDark text-xl rounded-full font-semibold enabled:hover:bg-themeOrange enabled:hover:text-themeLight enabled:hover:scale-110 transition-all disabled:cursor-not-allowed"
            >
              Submit
            </button>
          )}
          {duration === 0 && (
            <button
              onClick={() => {
                if (selectedAnswer === questions[questionIdx].correct_answer) setScore((prev) => prev + 1);
                setQuestionIdx((prev) => prev + 1);
                setDuration(DURATION);
                setSelectedAnswer("");
              }}
              className="px-8 py-4 bg-themeLight text-themeDark text-xl rounded-full font-semibold hover:bg-themeOrange hover:text-themeLight hover:scale-110 transition-all"
            >
              Next Question
            </button>
          )}
          <div className="absolute top-10 w-full mt-20 flex flex-col items-end gap-4">
            <div style={{ width: `${(duration * 100) / DURATION}%` }} className="h-4 rounded-full bg-themeOrange transition-all" />
            <div>
              <p className="text-3xl font-semibold text-themeOrange">{Math.ceil(duration / 1000)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
