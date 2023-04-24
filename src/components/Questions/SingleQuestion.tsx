import React from "react";
import { QuestionLetterType } from "./QuestionType";
import AnswerButton from "./AnswerButton";
type SingleQuestionProps = {
  id: number;
  question: string;
  correctAnswer: QuestionLetterType;
  isClicked: boolean;
  setAnswer: (answer: QuestionLetterType, id: number) => void;
  userAnswer: QuestionLetterType | "none";
  answers: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
};

const SingleQuestion: React.FC<SingleQuestionProps> = ({
  id,
  question,
  correctAnswer,
  isClicked,
  setAnswer,
  userAnswer,
  answers,
}) => {
  const answerLetter: QuestionLetterType[] = ["a", "b", "c", "d"];
  const booleanAnswerLetter: QuestionLetterType[] = ["a", "b"];
  const printAnswers = answers["c"]
    ? answerLetter.map((ans) => (
        <AnswerButton
          key={answers[ans]}
          buttonLetter={ans}
          questionId={id}
          answer={answers[ans]}
          correctAnswer={correctAnswer}
          isClicked={isClicked}
          userAnswer={userAnswer}
          setAnswer={setAnswer}
        />
      ))
    : booleanAnswerLetter.map((ans) => (
        <AnswerButton
          key={answers[ans]}
          buttonLetter={ans}
          questionId={id}
          answer={answers[ans]}
          correctAnswer={correctAnswer}
          isClicked={isClicked}
          userAnswer={userAnswer}
          setAnswer={setAnswer}
        />
      ));
  return (
    <div
      className="grid grid-cols-1 
    sm:grid-cols-[repeat(2,minmax(130px,_300px))] 
    sm:grid-rows-[1fr,max-content,max-content] gap-5 justify-center"
    >
      <h2 className="text-center font-bold pb-5 sm:col-span-2">{question}</h2>
      {printAnswers}
    </div>
  );
};
export default SingleQuestion;
