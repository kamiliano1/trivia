import React, { useEffect, useState } from "react";
import { QuestionType, QuestionLetterType } from "./QuestionType";
import SingleQuestion from "./SingleQuestion";

type questionInformationType = "Well done! Correct!" | "Wrong answer";

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<QuestionType[]>([]);
  const [over, setOver] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [randomQuestionId, setRandomQuestionId] = useState<number[]>([]);
  const [answerInformation, setAnswerInformation] =
    useState<questionInformationType>("Well done! Correct!");

  const [userScore, setUserScore] = useState<number>(0);
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

  useEffect(() => {
    if (currentQuestionNumber === questList.length - 1)
      currentQuestions.map((item) =>
        item.isCorrect ? setUserScore((prev) => prev + 1) : ""
      );
    console.log(currentQuestions);
  }, [currentQuestions]);

  useEffect(() => {
    if (questions.length) {
      setLoading(true);
    }
  }, [currentQuestionNumber, questions]);
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
    // console.log(questions[0]);
  };
  useEffect(() => {
    generateRandomIdQuestion();
    setCurrentQuestions(questList);
  }, [questions]);

  const generateRandomIdQuestion = () => {
    const randomQuestionIdArray: number[] = [];
    while (randomQuestionIdArray.length < 3) {
      const randomNumber = Math.floor(Math.random() * 38);
      if (!randomQuestionIdArray.includes(randomNumber))
        randomQuestionIdArray.push(randomNumber);
    }
    randomQuestionIdArray.sort((a, b) => a - b);
    setRandomQuestionId(randomQuestionIdArray);
  };
  const questList = questions.filter((quest, id) =>
    randomQuestionId.includes(id)
  );

  const nextQuestion = () => {
    if (currentQuestionNumber + 1 === questList.length) {
      setOver(true);
      return;
    }
    setCurrentQuestionNumber((prev) => prev + 1);
  };
  const restartGame = () => {
    generateRandomIdQuestion();
    setCurrentQuestions(questList);
    setUserScore(0);
    setOver(false);
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
  return (
    <div className="text-center">
      {loading && (
        <>
          <h2>
            Question {currentQuestionNumber + 1} / {questionList.length}
          </h2>
          {questionList[currentQuestionNumber]}
          {currentQuestions[currentQuestionNumber] && (
            <>
              {currentQuestions[currentQuestionNumber].isClicked && (
                <>
                  {currentQuestions[currentQuestionNumber] && (
                    <p className="border-t-[1px] pt-2">{answerInformation}</p>
                  )}
                  <button
                    className="mt-2 rounded-lg border-[1px] w-full py-3"
                    onClick={nextQuestion}
                  >
                    Next Question
                  </button>
                </>
              )}
            </>
          )}
        </>
      )}

      {over && (
        <>
          <h2>
            Congratulations your total score is {userScore} from total{" "}
            {questionList.length} questions
          </h2>
          <button onClick={restartGame}>Play again</button>
        </>
      )}
      <div></div>
    </div>
  );
};
export default Questions;
