import React, { useState } from "react";
import { QuestionLetterType } from "./QuestionType";
type AnswerButtonProps = {
  buttonLetter: QuestionLetterType;
  questionId: number;
  answer: string;
  answers?: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  isClicked: boolean;
  correctAnswer: string;
  userAnswer: string;
  setAnswer: (answer: QuestionLetterType, id: number) => void;
};

const AnswerButton: React.FC<AnswerButtonProps> = ({
  buttonLetter,
  questionId,
  answer,
  correctAnswer,
  isClicked,
  userAnswer,
  setAnswer,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const setQuestionAnswer = () => {
    setIsButtonClicked(true);
    setAnswer(buttonLetter, questionId);
  };
  return (
    <button
      disabled={isClicked ? true : false}
      onClick={setQuestionAnswer}
      className={`border-[1px] border-black rounded-lg py-3 px-2 ${
        !isClicked && "hover:opacity-70 hover:bg-slate-400"
      }
          ${
            isButtonClicked &&
            (correctAnswer === userAnswer
              ? "bg-green-400 text-black border-green-400"
              : "bg-red-300 text-black border-red-300")
          }`}
    >
      {answer}
    </button>
  );
};
export default AnswerButton;
