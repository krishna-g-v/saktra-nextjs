"use client";
import { HoverCard } from "./HoverCard";
import hover1 from "../../public/images/hoverCard1.png";
import { Navigator } from "./Navigator";
import { useState, useEffect } from "react";
import { SectionData } from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";
import { Card, SecondaryCardType } from "./Card";

type CardType = "HoverCard" | "Card";

export interface CarouselProps {
  data: SectionData[];
  hoverColor?: string;
  cardType?: CardType;
  secondaryCardType?: SecondaryCardType;
  width?: number;
  height?: string;
  navigatorPosition?: boolean;
  section?: string;
  enableLink?: boolean;
  link?: string;
  id?: string;
  maxCards?: number;
  showReadMore?: boolean;
}

export const Carousel = ({
  showReadMore = true,
  link = "#",
  enableLink = true,
  id = undefined,
  data,
  hoverColor,
  cardType = "HoverCard",
  secondaryCardType = "card1",
  width,
  height,
  maxCards = 3,
  navigatorPosition = false,
  section = "other",
}: CarouselProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMobile, setIsMobile] = useState(false);

  // Derived state: can we go next or previous?
  const canNext = currIndex + maxCards < data.length - 1;
  const canPrev = currIndex > 0;

  // Media query detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextImg = () => {
    if (!canNext) return; // stop at end
    setDirection("right");
    setCurrIndex((prev) => prev + 1);
  };

  const prevImg = () => {
    if (!canPrev) return; // stop at start
    setDirection("left");
    setCurrIndex((prev) => prev - 1);
  };

  // Framer Motion variants (same as before)
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
              {cardType === "HoverCard" ? (
                <HoverCard
                  showReadMore={showReadMore}
                  link={data[currIndex]?.link || ""}
                  cardContent={data[currIndex]?.cardContent}
                  cardHeader={data[currIndex]?.header}
                  hoverColor={hoverColor ?? "#BBF2FF"}
                  imgSrc={data[currIndex]?.imgLink ?? hover1}
                />
              ) : (
                <Card
                  link={data[currIndex]?.link || link}
                  enableLink={enableLink}
                  cardType={secondaryCardType}
                  key={currIndex}
                  cardContent={data[currIndex].cardContent}
                  cardHeader={data[currIndex].header}
                  imgLink={data[currIndex]?.imgLink}
                  width={width}
                  height={height}
                />
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            className="flex gap-4 transition-transform ease-in-out duration-500 md:pl-[200px]"
            style={{
              width: `${data.length * 100}%`,
              transform: `translateX(-${currIndex * (100 / data.length)}%)`,
            }}
          >
            {data.map((d, i) => (
              <div key={i}>
                {cardType === "HoverCard" ? (
                  <HoverCard
                    showReadMore={showReadMore}
                    link={d.link || ""}
                    cardContent={d.cardContent}
                    cardHeader={d.header}
                    hoverColor={hoverColor ?? "#BBF2FF"}
                    imgSrc={d.imgLink ?? hover1}
                  />
                ) : (
                  <Card
                    link={d.link || link}
                    enableLink={enableLink}
                    cardType={secondaryCardType}
                    imgLink={d.imgLink}
                    key={i}
                    cardContent={d.cardContent}
                    cardHeader={d.header}
                    width={width}
                    height={height}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
      {id === "services-home" ? (
        <div className="h-14"></div>
      ) : id === "industries" ? (
        <div className="h-14"></div>
      ) : id === "insights" ? (
        <div className="h-14"></div>
      ) : id === "about-us" ? (
        <div className="h-8"></div>
      ) : null}
      <Navigator
        screenSize={isMobile ? "mobile" : "desktop"}
        buttonColor={hoverColor}
        nextImg={nextImg}
        prevImg={prevImg}
        navigatorPosition={navigatorPosition}
        section={section}
        disableNext={!canNext}
        disablePrev={!canPrev}
      />
    </div>
  );
};
