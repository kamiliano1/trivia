import React from "react";
import { QuestionType } from "./QuestionType";
type SingleQuestionProps = {
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
};

const SingleQuestion: React.FC<SingleQuestionProps> = ({
  question,
  answerA,
  answerB,
  answerC,
  answerD,
}) => {
  return (
    <div className=" ">
      <h2 className="text-center font-bold">{question}</h2>
      <div className="grid grid-cols-2 grid-rows-2">
        <button>{answerA}</button>
        <button>{answerB}</button>
        <button>{answerC}</button>
        <button>{answerD}</button>
      </div>
    </div>
  );
};
export default SingleQuestion;
