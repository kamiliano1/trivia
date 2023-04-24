import { useEffect, useState } from "react";
import { QuestionType } from "../components/Questions/QuestionType";

const useQuestions = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  useEffect(() => {
    fetch("https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json")
      .then((res) => res.json())
      .then((data) => {
        const questionArray = data.map((question: QuestionType) => ({
          ...question,
          isClicked: false,
          isCorrect: false,
          userAnswer: "none",
        }));
        setQuestions(questionArray);
      });
  }, []);
  return { questions };
};
export default useQuestions;
