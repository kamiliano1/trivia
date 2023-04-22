import Image from "next/image";
import { Karla } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Questions from "../components/Questions/Questions";

const karla = Karla({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${karla.className} px-3
    sm:px-7`}
    >
      <Navbar />
      <Questions />
    </main>
  );
}
