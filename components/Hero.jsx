"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="min-h-screen bg-white text-black  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 w-[800px] h-[800px] bg-black rounded-full -translate-y-1/2 translate-x-1/2"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-8">
          <div className="space-y-1">
            <p className="text-sm font-mono">FULL STACK DEVELOPMENT</p>
            <p className="text-sm font-mono">{new Date().getFullYear()}</p>
          </div>
          <nav className="flex gap-8 text-sm">
            <Link href="#" className="hover:underline underline-offset-4">
              HOME
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              ABOUT
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              WORKS
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Hero */}

        <main className="grid  grid-cols-1 w-3/4 m-auto lg:grid-cols-2 gap-12 px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl  font-bold ">
              full stack
              <br />
              developer_
            </h1>
            <p className="text-lg max-w-md text-neutral-600">
              Hi, {"I'm"} Bereket Wolde. A passionate Full Stack Developer
              specializing in building exceptional digital experiences.
            </p>
            <div className="inline-flex  overflow-hidden group relative gap-4">
              <Button className="rounded " variant="outline">
                <Link href="#works" className="flex items-center gap-2">
                  SEE MY WORKS
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
              <motion.div className="absolute bg-opacity-55 left-6 duration-500 ease-linear transition-all group-hover:translate-x-0 translate-x-80 bg-gray-200 h-full w-5 -skew-x-12" />
            </div>
            <div className="flex gap-6 text-sm text-neutral-600">
              <Link
                href="https://github.com"
                className="hover:text-black transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Code snippet decoration */}
            <div className="absolute inset-0 font-mono text-sm opacity-10 overflow-hidden whitespace-pre">
              {`function Developer() {
          const skills = [
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            'Next.js'
          ]
          
          return (
            <Developer 
              type="Full Stack"
              passion="Building"
              focus="Solutions"
            />
          )
          }`}
            </div>
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border-8 border-black rounded-full opacity-5" />
              <div className="absolute w-72 h-72 border-8 border-black rounded-full opacity-10" />
              <div className="absolute w-48 h-48 border-8 border-black rounded-full opacity-15" />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
