import React, { useCallback, useEffect, useState } from "react";
import { QuestionType, QuestionLetterType } from "./QuestionType";
import SingleQuestion from "./SingleQuestion";
import NextQuestionButton from "./NextQuestionButton";
import GameOverSummary from "./GameOverSummary";
import useQuestions from "../../hooks/useQuestions";
type questionInformationType = "Well done! Correct!" | "Wrong answer";
const QUESTION_QUANTITY = 2;
const Questions: React.FC = () => {
  const { questions } = useQuestions();
  const [currentQuestions, setCurrentQuestions] = useState<QuestionType[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [randomQuestionId, setRandomQuestionId] = useState<number[]>([]);
  const [answerInformation, setAnswerInformation] =
    useState<questionInformationType>("Well done! Correct!");
  const [userScore, setUserScore] = useState<number>(0);
  const generateRandomIdQuestion = useCallback(() => {
    const randomQuestionIdArray: number[] = [];
    while (randomQuestionIdArray.length < QUESTION_QUANTITY) {
      const randomNumber = Math.floor(Math.random() * 39);
      if (!randomQuestionIdArray.includes(randomNumber))
        randomQuestionIdArray.push(randomNumber);
    }
    randomQuestionIdArray.sort((a, b) => a - b);
    setRandomQuestionId(randomQuestionIdArray);
    setCurrentQuestions(
      questions.filter((quest, id) => randomQuestionId.includes(id))
    );
  }, [questions, randomQuestionId]);

  useEffect(() => {
    if (!loading) generateRandomIdQuestion();
  }, [generateRandomIdQuestion, loading]);

  useEffect(() => {
    if (currentQuestions.length) {
      setLoading(true);
    }
  }, [currentQuestions]);

  useEffect(() => {
    if (!loading) return;
    currentQuestions[currentQuestionNumber].isCorrect
      ? setAnswerInformation("Well done! Correct!")
      : setAnswerInformation("Wrong answer");
  }, [currentQuestionNumber, currentQuestions, loading]);

  const setAnswer = (clickedAnswer: QuestionLetterType, questionId: number) => {
    setCurrentQuestions((item) =>
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
  };
  const updateUserScore = useCallback(() => {
    setUserScore((prev) => prev + 1);
  }, []);
  useEffect(() => {
    setUserScore(0);
    currentQuestions.map((item) => (item.isCorrect ? updateUserScore() : ""));
  }, [currentQuestions, updateUserScore]);

  useEffect(() => {
    if (
      currentQuestionNumber + 1 === currentQuestions.length &&
      currentQuestions[currentQuestionNumber].isClicked
    ) {
      setGameOver(true);
    }
  }, [currentQuestionNumber, currentQuestions, currentQuestions.length]);
  const nextQuestion = () => {
    if (currentQuestionNumber + 1 === currentQuestions.length) {
      setGameOver(true);
      return;
    }
    setCurrentQuestionNumber((prev) => prev + 1);
  };
  const restartGame = () => {
    generateRandomIdQuestion();
    setUserScore(0);
    setGameOver(false);
    setCurrentQuestionNumber(0);
  };
  const questionList = currentQuestions.map(
    ({ question, id, answer, isClicked, choices, userAnswer }) => {
      return (
        <SingleQuestion
          key={id}
          id={id}
          question={question}
          correctAnswer={answer}
          isClicked={isClicked}
          setAnswer={setAnswer}
          userAnswer={userAnswer}
          answers={choices}
        />
      );
    }
  );
  const actualQuestionPrinted = questionList[currentQuestionNumber];

  return (
    <div className="text-center max-w-[620px] mx-auto">
      {loading && (
        <>
          <h2>
            Question {currentQuestionNumber + 1} / {questionList.length}
          </h2>
          <h2>{currentQuestions[currentQuestionNumber].answer}</h2>
          {actualQuestionPrinted}
          {currentQuestions[currentQuestionNumber] && (
            <>
              {currentQuestions[currentQuestionNumber].isClicked && (
                <>
                  {currentQuestions[currentQuestionNumber] && (
                    <p className="border-t-[1px] mt-5 mb-3 pt-2">
                      {answerInformation}
                    </p>
                  )}
                  {!gameOver && (
                    <NextQuestionButton nextQuestion={nextQuestion} />
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
      {gameOver && (
        <GameOverSummary
          userScore={userScore}
          questionQuantity={questionList.length}
          restartGame={restartGame}
        />
      )}
    </div>
  );
};
export default Questions;
