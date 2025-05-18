"use client";
import { HoverCard } from "./HoverCard";
import hover1 from "../../public/images/hoverCard1.png";
import { Navigator } from "./Navigator";
import { useState, useEffect } from "react";
import { SectionData } from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

export interface CarouselProps {
  data: SectionData[];
  hoverColor?: string;
}

export const Carousel = ({ data, hoverColor }: CarouselProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMobile, setIsMobile] = useState(false);

  // Media query detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextImg = () => {
    setDirection("right");
    setCurrIndex((prev) => (prev + 1) % data.length);
  };

  const prevImg = () => {
    setDirection("left");
    setCurrIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  // Framer Motion variants for mobile view
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
    <div className="flex flex-col gilmer-regular w-full relative overflow-hidden">
      {/* Wrapper for cards */}
      <div className="relative w-full h-[400px] mt-10">
        {isMobile ? (
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
        ) : (
          <motion.div
            className="flex gap-4 transition-transform ease-in-out duration-500"
            style={{
              width: `${data.length * 100}%`,
              transform: `translateX(-${currIndex * (100 / data.length)}%)`,
            }}
          >
            {data.map((d, i) => (
              <div key={i}>
                <HoverCard
                  cardContent={d.cardContent}
                  cardHeader={d.header}
                  hoverColor={hoverColor ?? "#BBF2FF"}
                  imgSrc={d.imgLink ?? hover1}
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
      <Navigator
        screenSize={isMobile ? "mobile" : "desktop"}
        buttonColor={hoverColor}
        nextImg={nextImg}
        prevImg={prevImg}
      />
    </div>
  );
};
