"use client";
import { useTheme } from "next-themes";
import { Oswald, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { CiDark, CiLight } from "react-icons/ci";

const hack = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
export default function Header() {
  const [clicked, setIsClicked] = useState(false);
  const { setTheme } = useTheme();

  return (
    <header className="flex  items-center justify-between ">
      <Link className="border" href={"/"}>
        <Image src="/images/avatar.png" alt="logo" width={100} height={100} />
      </Link>
      <div className={` text-center lg:text-4xl ${hack.className}`}>
        Bereket
      </div>
      <nav>
        <ul>
          <li
            className=" 
          "
          >
            {!clicked && (
              <CiDark
                onClick={() => {
                  setTheme("dark");
                  setIsClicked(!clicked);
                }}
                size={40}
                color="black"
                className=" "
              />
            )}
            {clicked && (
              <CiLight
                onClick={() => {
                  setTheme("light");
                  setIsClicked(!clicked);
                }}
                size={40}
                color="white"
                className=""
              />
            )}
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
