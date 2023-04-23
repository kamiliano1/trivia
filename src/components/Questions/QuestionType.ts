export type QuestionLetterType = "a" | "b" | "c" | "d";
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
  answer: QuestionLetterType;
  isClicked: boolean;
  isCorrect: boolean;
  userAnswer: "none" | QuestionLetterType;
};
