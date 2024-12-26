"use client";
import { visueltBold } from "@/public/constants/fonts";
import { motion } from "framer-motion";
import { Facebook, Github, Instagram, MoveRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <motion.footer className="min-h-screen overflow-hidden relative flex flex-col items-center justify-center bg-[#000000]">
      <div className="flex items-center flex-col">
        <div className="flex items-center">
          <h1 className={`text-white  ${visueltBold.className} text-[65px]`}>
            Code the future with me.
          </h1>
          <Image
            src={"/images/circle.png"}
            width={300}
            height={300}
            alt="enthusiasm"
            className="    w-[200px] aspect-square "
          />
        </div>
        <p className="text-[#8F8E8E]">Open to freelance opportunities</p>
        <Link
          href={"/"}
          className={`flex group mt-10  text-white items-center px-16 py-3 rounded-full z-50 gap-4
          
                        border-none relative  whitespace-normal ${visueltBold.className}`}
        >
          <span className="z-50">SAY HELLO</span>
          <span className="z-50 flex ">
            <MoveRight className="w-full flex" />
          </span>
          <span className=" h-full bg-[#303030] group-hover:w-full   rounded-full transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)]  absolute  w-[50px] left-0 " />
        </Link>
      </div>
      <div className="flex items-center pt-40 ">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Bereket Wolde
        </p>
        <div className="flex gap-2 items-center ml-10">
          <Link
            className="hover:bg-white p-4 rounded-full transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] "
            href={"#"}
          >
            <Github
              color=""
              className="text-white transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] "
            />
          </Link>
          <Link href={"#"}>
            <Facebook color="white" />
          </Link>
          <Link href={"#"}>
            <Instagram color="white" />
          </Link>
          <Link href={"#"}>
            <X color="white" />
          </Link>
        </div>
      </div>
      <div className="absolute -bottom-[20%] -left-[20%] rounded-full border-[#303030] border w-[500px] h-[500px] " />
    </motion.footer>
  );
}
