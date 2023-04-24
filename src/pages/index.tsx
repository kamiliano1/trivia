import Image from "next/image";
import { Karla } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Questions from "../components/Questions/Questions";

const karla = Karla({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${karla.className} px-3 max-w-[1440px] mx-auto
    sm:px-7 sm:pt-5`}
    >
      <Navbar />
      <Questions />
    </main>
  );
}
