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
        className="rounded-lg border-[1px] mt-4 border-black bg-blue-300 w-full sm:w-auto py-3 px-5 hover:opacity-70"
        onClick={restartGame}
      >
        Play again
      </button>
    </div>
  );
};
export default GameOverSummary;
