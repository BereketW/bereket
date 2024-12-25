import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
export default function PortfolioCard() {
  return (
    <motion.div className="pt-[6rem] relative  group flex gap-10 transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] pb-[8rem] hover:bg-white bg-[#f8f8f8] ">
      <motion.div className="flex items-center ">
        <div className="bg-[#d8d8d8] group-hover:w-[200px]  transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] w-[150px] h-[1px] mr-5" />
        <span>01</span>
      </motion.div>
      <motion.div className="flex w-full  items-center justify-between">
        <div>
          <h1 className="text-[45px] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] flex flex-col font-bold text-[#8f8e8e]">
            Rejuva Glow Beauty
          </h1>
          <span className="text-[#8f8e8e] uppercase">web app</span>
        </div>
        <motion.div className="w-[430px] h-[400px]  flex flex-col items-center justify-center absolute right-0 top-0 bottom-0 m-auto">
          <Link
            href={"/"}
            className="flex group  items-center px-16 py-3 rounded-full z-50 gap-4
        
                    border-none relative font-bold  whitespace-normal"
          >
            <span className="z-50">View Project</span>
            <span className="z-50 flex ">
              <MoveRight className="w-full flex" />
            </span>
            <span className=" h-full bg-[#e8e8e8] group-hover:w-full  rounded-full transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)]  absolute  w-[50px] left-0 " />
          </Link>
          <Image
            className=" absolute w-0 transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] group-hover:w-full h-full delay-100  layout object-fit right-0 bottom-0 top-0 z-30 "
            src={"/images/rejuva.png"}
            height={300}
            width={400}
          />
          <div className="h-[70%] -bottom-[20%] group-hover:w-[100%] absolute  h right-[25%] transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] w-0 transform-r-c z-10  bg-[#e0f1f7] " />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
