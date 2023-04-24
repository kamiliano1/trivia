import React from "react";

type GameOverSummaryProps = {
  userScore: number;
  questionQuantity: number;
  restartGame: () => void;
};

const GameOverSummary: React.FC<GameOverSummaryProps> = ({
  userScore,
  questionQuantity,
  restartGame,
}) => {
  return (
    <div>
      {" "}
      <h2>
        Congratulations your total score is {userScore} from {questionQuantity}{" "}
        questions
      </h2>
      <button
        className="rounded-lg border-[1px] w-full sm:w-auto py-3 sm:px-5 mt-5"
        onClick={restartGame}
      >
        Play again
      </button>
    </div>
  );
};
export default GameOverSummary;
