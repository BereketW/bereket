"use client";
import { color, motion } from "framer-motion";
import {
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightCircle,
  LucideArrowLeft,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { visueltBold } from "@/public/constants/fonts";
export default function Works() {
  const projects = [
    {
      id: 1,
      title: "rejuva glow beauty",
      imageUrl: "/images/rejuva.png",
      type: "web app",
      link: "#",
      color: "#e0f1f7",
    },
    {
      id: 2,
      title: "abrelo HD",
      imageUrl: "/images/abrelo-hd.png",
      type: "web app",
      link: "#",
      color: "#fffac3",
    },
  ];
  return (
    <motion.section className="min-h-screen mb-10 mt-20">
      <div className="w-2/3 m-auto">
        <motion.h1
          className={`${visueltBold.className} text-[45px] leading-[68px]`}
        >
          Bringing ideas to life with code.
        </motion.h1>
        <motion.p className="text-paragraph mt-16">
          Here's a showcase of my recent projects.
        </motion.p>
      </div>
      <motion.div className="mt-20 w-full">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </motion.div>
      <motion.div className="pl-[15%] pr-[15%] pt-[10%]">
        <motion.span className="text-[#717171] text-[11px] uppercase font-bold">
          I do have more projects
        </motion.span>
        <motion.h1 className="font-bold ml-4 flex items-center gap-6  group text-[45px] mt-20 tracking-tighter">
          View all projects{" "}
          <span>
            <ArrowRightCircle className="group-hover:scale-150 transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] group-hover:translate-x-6" />
          </span>
        </motion.h1>
      </motion.div>
    </motion.section>
  );
}
