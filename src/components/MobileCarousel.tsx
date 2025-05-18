"use client";
import { HoverCard } from "./HoverCard";
import hover1 from "../../public/images/hoverCard1.png";
import { Navigator } from "./Navigator";
import { useState } from "react";
import { SectionData } from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

export interface CarouselProps {
  data: SectionData[];
  hoverColor?: string;
}

export const Carousel = ({ data, hoverColor }: CarouselProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextImg = () => {
    setDirection("right");
    setCurrIndex((prev) => (prev + 1) % data.length);
  };

  const prevImg = () => {
    setDirection("left");
    setCurrIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col gilmer-regular w-full relative overflow-hidden max-sm:mt-8">
      <div className="relative h-[300px] flex justify-center items-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            <HoverCard
              cardContent={data[currIndex].cardContent}
              cardHeader={data[currIndex].header}
              hoverColor={hoverColor ?? "#BBF2FF"}
              imgSrc={data[currIndex].imgLink ?? hover1}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <Navigator buttonColor={hoverColor} nextImg={nextImg} prevImg={prevImg} />
    </div>
  );
};
