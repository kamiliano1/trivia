import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Karla } from "next/font/google";
type questionsProps = {};
const karla = Karla({ subsets: ["latin"] });
const questions: React.FC<questionsProps> = () => {
  return (
    <main
      className={`${karla.className} px-3 max-w-[1440px] mx-auto
    sm:px-7 sm:pt-5`}
    >
      <Navbar />
    </main>
  );
};
export default questions;
