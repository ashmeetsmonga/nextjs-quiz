import React, { FC } from "react";

interface OptionProps {
  name: string;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
  disabled: boolean;
}

const Option: FC<OptionProps> = ({ name, setSelectedAnswer, isSelected, disabled }) => {
  return (
    <button
      onClick={() => setSelectedAnswer(name)}
      disabled={disabled}
      className={`text-themeLight px-8 py-4 rounded-full text-2xl font-semibold enabled:hover:scale-110 enabled:hover:bg-themeOrange disabled:cursor-not-allowed transition-all ${
        isSelected ? "bg-themeOrange scale-110" : "bg-themeDark"
      }`}
    >
      {name}
    </button>
  );
};

export default Option;
