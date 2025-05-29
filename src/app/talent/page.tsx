"use client";
import Image from "next/image";
import { TabBar } from "@/components/TabBar";
import { Footer } from "@/components/Footer";
import { easeInOut, motion } from "framer-motion";
import img1 from "../../../public/images/s21.jpg";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-white absolute top-0 left-0 text-black .gilroy-regular">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.1, ease: easeInOut }}
        className="banner w-full h-[45vh] relative"
      >
        <Image
          src={img1}
          alt="Services Page Banner"
          style={{ objectPosition: "center 20%" }}
          fill
          className="object-cover bg-purple-400"
        />
        <div className="bg-[#2b0b1d] opacity-70 absolute top-0 left-0 w-full h-full"></div>
        <div className="bannerContent absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
              className="text-6xl font-extrabold text-white max-sm:text-4xl"
            >
              Our Services
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
                delay: 0.1,
              }}
              className="text-3xl font-medium text-white mt-5 max-sm:text-[18px] max-sm:px-2.5 max-sm:text-center"
            >
              Comprehensive IT solutions tailored to meet the unique challenges
              of your business
            </motion.h3>
          </div>
        </div>
      </motion.div>
      <div className="content mt-16 w-full flex justify-center">
        <TabBar showIndex={0} />
      </div>
      <Footer />
    </div>
  );
}
