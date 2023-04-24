import React from "react";

type NextQuestionButtonProps = { nextQuestion: () => void };

const NextQuestionButton: React.FC<NextQuestionButtonProps> = ({
  nextQuestion,
}) => {
  return (
    <button
      className="rounded-lg border-[1px] w-full sm:w-auto py-3 px-5"
      onClick={nextQuestion}
    >
      Next Question
    </button>
  );
};
export default NextQuestionButton;
