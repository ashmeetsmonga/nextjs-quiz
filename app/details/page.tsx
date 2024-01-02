import Image from "next/image";
import Link from "next/link";
import React from "react";

const Details = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/4 flex flex-col gap-14 bg-themeLight p-10 rounded-lg">
        <h1 className="text-themeDark text-4xl font-bold">Quiz Details</h1>
        <div className="flex flex-col gap-7">
          <div className="flex gap-3 flex-col">
            <p className="text-themeDark text-2xl font-bold">Category</p>
            <p className="text-themeOrange text-xl font-bold">Mythology</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-themeDark text-2xl font-bold">Difficulty</p>
            <select className="text-themeOrange text-xl font-semibold outline-none border-none bg-white py-2 px-4 rounded-xl appearance-none cursor-pointer">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-themeDark text-2xl font-bold">No Of Questions</p>
            <select className="text-themeOrange text-xl font-semibold outline-none border-none bg-white py-2 px-4 rounded-xl appearance-none cursor-pointer">
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
        </div>
        <Link href="/quiz" className="flex justify-center">
          <button className="bg-themeLight py-4 px-8 rounded-full text-xl font-bold text-themeDark hover:scale-105 hover:bg-themeOrange transition-all hover:text-themeLight">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
