import Link from "next/link";
import React from "react";

import { Montserrat } from "next/font/google";

type NavbarProps = {};

const montserrat = Montserrat({ subsets: ["latin"] });
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className=" text-center py-3 sm:flex sm:items-center ">
      <h1
        className={`uppercase mr-auto font-bold text-2xl pb-5 sm:pb-0 ${montserrat.className} `}
      >
        Chingu Trivia
      </h1>
      <Link
        className="block sm:inline-block pb-2 sm:pb-0 hover:opacity-70 sm:pr-7 sm:text-lg"
        href="/"
      >
        Home
      </Link>
    </div>
  );
};
export default Navbar;
