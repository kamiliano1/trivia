export type QuestionType = {
  question: string;
  id: number;
  topic: "html" | "css" | "javascript";
  choices: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: "a" | "b" | "c" | "d";
  isClicked: boolean;
  isCorrect: boolean;
  userAnswer: "none" | "a" | "b" | "c" | "d";
};
