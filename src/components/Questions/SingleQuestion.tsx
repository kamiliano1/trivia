import React from "react";
import { QuestionType } from "./QuestionType";
type SingleQuestionProps = {
  id: number;
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: "a" | "b" | "c" | "d";
  isClicked: boolean;
  setAnswer: (answer: "a" | "b" | "c" | "d", id: number) => void;
  userAnswer: "a" | "b" | "c" | "d" | "none";
};

const SingleQuestion: React.FC<SingleQuestionProps> = ({
  id,
  question,
  answerA,
  answerB,
  answerC,
  answerD,
  correctAnswer,
  isClicked,
  setAnswer,
  userAnswer,
}) => {
  return (
    <div className="grid grid-cols-[repeat(2,minmax(130px,_300px))] grid-rows-[1fr,max-content,max-content] gap-5 justify-center">
      <h2 className="text-center font-bold pb-5 col-span-2">{question}</h2>
      {isClicked && <h2>KLIKNIETE</h2>}
      <h2>
        {correctAnswer} |{userAnswer} | {isClicked}
      </h2>
      <button
        onClick={() => setAnswer("a", id)}
        className={`border-[1px] rounded-lg py-1 px-2 hover:opacity-70
       
        ${
          isClicked &&
          (correctAnswer === userAnswer
            ? "bg-green-400 text-black border-green-400"
            : "bg-red-300 text-black border-red-300")
        }`}
      >
        {answerA}
      </button>
      <button
        onClick={() => setAnswer("b", id)}
        className={`border-[1px] rounded-lg py-1 px-2 hover:opacity-70
       
        ${
          isClicked && userAnswer === "b" && correctAnswer === userAnswer
            ? "bg-green-400 text-black border-green-400"
            : "bg-red-300 text-black border-red-300"
        }`}
      >
        {answerB}
      </button>
      {answerC && (
        <>
          <button
            onClick={() => setAnswer("c", id)}
            className={`border-[1px] rounded-lg py-1 px-2 hover:opacity-70
       
        ${
          isClicked && userAnswer === "c" && correctAnswer === userAnswer
            ? "bg-green-400 text-black border-green-400"
            : "bg-red-300 text-black border-red-300"
        }`}
          >
            {answerC}
          </button>
          <button
            onClick={() => setAnswer("d", id)}
            className={`border-[1px] rounded-lg py-1 px-2 hover:opacity-70
       
        ${
          isClicked && userAnswer === "d" && correctAnswer === userAnswer
            ? "bg-green-400 text-black border-green-400"
            : "bg-red-300 text-black border-red-300"
        }`}
          >
            {answerD}
          </button>
        </>
      )}
    </div>
  );
};
export default SingleQuestion;
