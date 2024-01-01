"use client";
import React, { useState } from "react";
import { options } from "./quiz.constants";
import Option from "./components/Option";
import Timer from "./components/Timer";

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 flex flex-col items-center gap-16">
        <h1 className="text-4xl font-bold text-themeDark">Which of these mythological creatures is said to be half-man and half-horse?</h1>
        <div className="w-full flex justify-center gap-10">
          {options.map((option, idx) => (
            <Option key={idx} name={option} isSelected={selectedAnswer === option} setSelectedAnswer={setSelectedAnswer} />
          ))}
        </div>
        <div className="relative w-full flex justify-center mt-20">
          <button className="px-8 py-4 bg-themeLight text-themeDark text-xl rounded-full font-semibold hover:bg-themeOrange  hover:text-themeLight hover:scale-110 transition-all ">Submit</button>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
