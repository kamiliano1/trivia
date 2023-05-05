import Image from "next/image";
import { Karla } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Questions from "../components/Questions/Questions";
import Head from "next/head";

const karla = Karla({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Solo Project - Tier 2 - Chingu Trivia</title>
        <meta
          name="description"
          content="Chingu Trivia, solo project, questions included HTML, CSS and javascript category"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${karla.className} px-3 max-w-[1440px] mx-auto
    sm:px-7 sm:pt-5`}
      >
        <Navbar />
        <Questions />
      </main>
    </>
  );
}
