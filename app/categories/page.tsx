import React from "react";
import { categories } from "./categories.constants";
import Category from "./components/Category";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col gap-5 w-3/4 mt-10">
        <h1 className="text-4xl font-bold text-themeDark">Select Category</h1>
        <div className="grid grid-cols-4 gap-8 w-full">
          {categories.map((category, idx) => (
            <Link key={idx} href="/quiz">
              <Category name={category.name} image={category.image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
