import React, { FC } from "react";

interface OptionProps {
  name: string;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
}

const Option: FC<OptionProps> = ({ name, setSelectedAnswer, isSelected }) => {
  return (
    <button
      onClick={() => setSelectedAnswer(name)}
      className={`text-themeLight px-8 py-4 rounded-full text-2xl font-semibold hover:scale-110 transition-all ${isSelected ? "bg-themeOrange scale-110" : "bg-themeDark"}`}
    >
      {name}
    </button>
  );
};

export default Option;
