import axios from "axios";
import { QuestionsAPI } from "./quiz.types";

export const getQuestions = async (): Promise<QuestionsAPI> => {
  const { data } = await axios.get("https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple");
  return data;
};
