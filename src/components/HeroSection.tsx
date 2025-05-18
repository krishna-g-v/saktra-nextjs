"use client";
import Image from "next/image";
import img1 from "../../public/images/image-1.jpg";
import img2 from "../../public/images/bg-2.jpg";
import img3 from "../../public/images/bg-3.jpg";
import img4 from "../../public/images/bg-4.jpg";
import img5 from "../../public/images/bg-5.jpg";
import { Navigator } from "@/components/Navigator";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";

export const HeroSection = () => {
  const Images = [img1, img2, img3, img4, img5];
  const Headers1 = [
    "Leading the new",
    "Accelerating Growth with Top-Tier",
    "Built for",
    "Agile Teams That",
    "Leading the World with",
  ];
  const Headers2 = [
    "Digital World",
    "Talent & AI-Powered Technology",
    "What's Next",
    "Innovate & Accelerate",
    "AI-Powered Innovations",
  ];
  const linkTexts = [
    "Discover More",
    "Discover More",
    "Discover AI Innovation",
    "Hire Smart",
    "Learn More",
  ];
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
    <div className=" min-h-lvh relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`${index}-${direction}`}
          className="absolute inset-0 w-full h-full"
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
            style={{ objectPosition: "58% center" }}
            sizes="(max-width: 768px) 100vw, 100vw"
            placeholder="blur"
            blurDataURL={Images[index].blurDataURL}
            className="object-cover object-[center]"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="overlay flex items-left justify-center flex-col h-full w-full">
        <div className="content container px-6 sm:px-10 text-[#BBF2FF]">
          <h1 className="text-3xl sm:text-6xl uppercase">{Headers1[index]}</h1>
          <h1 className="text-3xl sm:text-6xl uppercase">{Headers2[index]}</h1>
          <Button text={linkTexts[index]} bgColor="#BBF2FF" />
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
