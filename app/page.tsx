"use client";
import { useQuizDetailsContext } from "@/context/QuizDetailsContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const { setScore } = useQuizDetailsContext();

  const startQuiz = () => {
    setScore(0);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex justify-center items-center">
      <div className="w-[90%] md:w-3/5 lg:w-2/4 2xl:w-1/4 flex flex-col items-center gap-32 bg-themeLight p-10 rounded-lg">
        <h1 className="text-7xl md:text-8xl text-themeDark font-extrabold">Quizzy</h1>
        <Link href="/categories">
          <button onClick={startQuiz} className="bg-themeDark py-4 px-8 rounded-full text-xl font-bold text-themeLight hover:bg-themeOrange hover:text-themeLight transition-all hover:scale-110 ">
            Play
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
