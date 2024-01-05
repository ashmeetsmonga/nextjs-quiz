"use client";
import { Question } from "@/app/quiz.types";
import React, { createContext, useContext, useState } from "react";

interface QuizDetailsContextProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  noOfQuestions: number;
  setNoOfQuestions: React.Dispatch<React.SetStateAction<number>>;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const quizDetailsContextDefaultValues: QuizDetailsContextProps = {
  category: "",
  setCategory: () => {},
  difficulty: "easy",
  setDifficulty: () => {},
  noOfQuestions: 5,
  setNoOfQuestions: () => {},
  questions: [],
  setQuestions: () => {},
  score: 0,
  setScore: () => {},
};

const QuizDetailsContext = createContext<QuizDetailsContextProps>(quizDetailsContextDefaultValues);

export function useQuizDetailsContext() {
  return useContext(QuizDetailsContext);
}

const QuizDetailsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [noOfQuestions, setNoOfQuestions] = useState<number>(5);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);

  return (
    <QuizDetailsContext.Provider value={{ category, difficulty, noOfQuestions, setCategory, setDifficulty, setNoOfQuestions, questions, setQuestions, score, setScore }}>
      {children}
    </QuizDetailsContext.Provider>
  );
};

export default QuizDetailsContextProvider;
