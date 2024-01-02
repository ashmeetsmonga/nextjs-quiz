"use client";
import { useQuizDetailsContext } from "@/context/QuizDetailsContext";
import Image from "next/image";
import React, { FC, useContext } from "react";

interface CategoryProps {
  name: string;
  image: string;
}

const Category: FC<CategoryProps> = ({ name, image }) => {
  const { setCategory } = useQuizDetailsContext();

  return (
    <div onClick={() => setCategory(name)} className="relative w-full aspect-[4/3] rounded-xl cursor-pointer hover:scale-105 transition-transform group overflow-clip">
      <div className="z-10 absolute w-full h-full bg-gradient-to-b from-transparent to-black rounded-xl opacity-70 group-hover:opacity-40 transition-opacity"></div>
      <Image src={image} fill objectFit="cover" className="rounded-xl group-hover:scale-125 transition-transform" alt="Mythology" />
      <div className="text-themeLight absolute bottom-0 right-0 px-4 py-3 z-20">
        <h2 className="text-2xl font-semibold capitalize group-hover:scale-110 origin-bottom-right transition-transform">{name}</h2>
      </div>
    </div>
  );
};

export default Category;
