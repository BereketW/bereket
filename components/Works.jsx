"use client";
import { motion } from "framer-motion";
import {
  ArrowLeftToLine,
  ArrowRight,
  LucideArrowLeft,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortfolioCard from "@/components/PortfolioCard";
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
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </motion.div>
    </motion.section>
  );
}
