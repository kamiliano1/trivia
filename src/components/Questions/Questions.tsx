import React, { useEffect, useState } from "react";
import { QuestionType } from "./QuestionType";
import SingleQuestion from "./SingleQuestion";
const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  useEffect(() => {
    fetch("https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
    setQuestions((item) =>
      item.map((question: QuestionType) => ({
        ...question,
        isClicked: false,
        isCorrect: false,
      }))
    );
  }, []);

  const questionList = questions.map(({ question, id, choices }) => (
    <SingleQuestion
      key={id}
      question={question}
      answerA={choices.a}
      answerB={choices.b}
      answerC={choices.c}
      answerD={choices.d}
    />
  ));

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
