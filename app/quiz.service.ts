import axios from "axios";
import { QuestionsAPI } from "./quiz.types";
import { categoryIdMap } from "./quiz/quiz.constants";

export const getQuestions = async (category: string, difficulty: string, noOfQuestions: number): Promise<QuestionsAPI> => {
  const { data } = await axios.get(`https://opentdb.com/api.php?amount=${noOfQuestions}&category=${categoryIdMap[category as keyof typeof categoryIdMap]}&difficulty=${difficulty}&type=multiple`);
  return data;
};
