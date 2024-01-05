"use client";
import { useQuizDetailsContext } from "@/context/QuizDetailsContext";
import Link from "next/link";

export default function Home() {
  const { setScore } = useQuizDetailsContext();

  const startQuiz = () => {
    setScore(0);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-32">
      <h1 className="text-8xl text-themeDark font-extrabold">Quizzy</h1>
      <Link href="/categories">
        <button onClick={startQuiz} className="bg-themeDark py-4 px-8 rounded-full text-xl font-bold text-themeLight hover:bg-themeOrange hover:text-themeLight transition-all hover:scale-110 ">
          Play
        </button>
      </Link>
    </div>
  );
}
