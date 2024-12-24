"use client";
import { motion } from "framer-motion";
import {
  ArrowLeftToLine,
  ArrowRight,
  LucideArrowLeft,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Works() {
  return (
    <motion.section className="min-h-screen mt-20">
      <div className="w-2/3 m-auto">
        <motion.h1 className="font-bold text-[45px] leading-[68px]">
          Bringing ideas to life with code.
        </motion.h1>
        <motion.p className="text-paragraph mt-16">
          Here's a showcase of my recent projects.
        </motion.p>
      </div>
      <motion.div className="mt-20">
        <motion.div className="pt-[6rem] relative  group flex gap-10 pb-[8rem] bg-[#f8f8f8] ">
          <motion.div className="flex items-center ">
            <div className="bg-[#d8d8d8] group-hover:w-[200px] transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] w-[150px] h-[1px] mr-5" />
            <span>01</span>
          </motion.div>
          <motion.div className="flex w-full items-center justify-between">
            <div>
              <h1 className="text-[45px] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] flex flex-col font-bold text-[#8f8e8e]">
                Rejuva Glow Beauty
              </h1>
              <span className="text-[#8f8e8e] uppercase">web app</span>
            </div>
            <motion.div className="w-[430px] h-[30rem] border border-red flex flex-col items-center justify-center absolute right-0 top-0 bottom-0 m-auto">
              <Link
                href={"/"}
                className="flex group  items-center px-16 py-3 rounded-full z-50 gap-4 border-none relative font-bold  whitespace-normal"
              >
                <span className="z-50">View Project</span>
                <span className="z-50 flex ">
                  <MoveRight className="w-full flex" />
                </span>
                <span className=" h-full bg-[#e8e8e8] group-hover:w-full  rounded-full transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)]  absolute  w-[50px] left-0 " />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
