"use client";
import Image from "next/image";
import img1 from "../../public/images/image-1.jpg";
import img2 from "../../public/images/bg-2.jpg";
import img3 from "../../public/images/bg-3.jpg";
import img4 from "../../public/images/bg-4.jpg";
import img5 from "../../public/images/bg-5.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import { Navigator } from "@/components/Navigator";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const HeroSection = () => {
  const Images = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextImg = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % Images.length);
  };

  const prevImg = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + Images.length) % Images.length);
  };

  return (
    <div className="h-[95vh] relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`${index}-${direction}`}
          className="absolute top-0 left-0 w-full h-full"
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={Images[index]}
            alt={`Background ${index}`}
            fill
            placeholder="blur"
            blurDataURL={Images[index].blurDataURL}
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="overlay flex items-left justify-center flex-col">
        <div className="content container px-10 text-[#BBF2FF] font-extrabold">
          <h1 className="text-6xl uppercase">Leading the new</h1>
          <h1 className="text-6xl uppercase">Digital World</h1>
          <button className="uppercase bg-[#BBF2FF]  text-black font-bold text-[14px] p-2 mt-5 px-7 rounded-2xl flex items-center justify-center gap-2 cursor-pointer">
            Discover More
            <HiArrowLongRight className="text-2xl" />
          </button>
        </div>
        <Navigator
          index={index + 1}
          total={Images.length}
          nextImg={nextImg}
          prevImg={prevImg}
        />
      </div>
    </div>
  );
};
