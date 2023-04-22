import React, { useEffect, useState } from "react";
import { QuestionType } from "./QuestionType";
import SingleQuestion from "./SingleQuestion";
const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  useEffect(() => {
    fetch("https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setQuestions((item) =>
          item.map((question: QuestionType) => ({
            ...question,
            isClicked: false,
            isCorrect: false,
            userAnswer: "none",
          }))
        );
      });
  }, []);

  const setAnswer = (
    clickedAnswer: "a" | "b" | "c" | "d",
    questionId: number
  ) => {
    setQuestions((item) =>
      item.map((question) =>
        question.id === questionId
          ? {
              ...question,
              isClicked: true,
              isCorrect: clickedAnswer === question.answer ? true : false,
              userAnswer: clickedAnswer,
            }
          : question
      )
    );
    console.log(questions[0]);
  };

  const questionList = questions.map(
    ({ question, id, answer, isClicked, choices, userAnswer }) => (
      <SingleQuestion
        key={id}
        id={id}
        question={question}
        answerA={choices.a}
        answerB={choices.b}
        answerC={choices.c}
        answerD={choices.d}
        correctAnswer={answer}
        isClicked={isClicked}
        setAnswer={setAnswer}
        userAnswer={userAnswer}
      />
    )
  );

  return (
    <div className="text-center">
      <h2>
        Question {currentQuestionNumber + 1} / {questions.length}
      </h2>
      {questionList[currentQuestionNumber]}
      <button onClick={() => setCurrentQuestionNumber((prev) => prev + 1)}>
        Next Question
      </button>
    </div>
  );
};
export default Questions;
