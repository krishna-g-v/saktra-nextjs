"use client";
import { HoverCard } from "./HoverCard";
import hover1 from "../../public/images/hoverCard1.png";
import { Navigator } from "./Navigator";
import { useState } from "react";
import { SectionData } from "./NavLinks";

export interface CarouselProps<T> {
  data: SectionData[];
  hoverColor?: string;
}

export const Carousel = <T,>({ data, hoverColor }: CarouselProps<T>) => {
  const [currIndex, setCurrIndex] = useState(0);

  const nextImg = () => {
    setCurrIndex((prev) => (prev + 1) % data.length);
  };
  const prevImg = () => {
    setCurrIndex((prev) => (prev - 1 - data.length) % data.length);
  };
  return (
    <div className="flex flex-col">
      <div className="carousel flex mt-10 gap-2.5 overflow-hidden shrink-0 flex-1">
        {data.map((d: SectionData, i) => (
          <HoverCard
            key={i}
            cardContent={d.cardContent}
            cardHeader={d.header}
            hoverColor={hoverColor ?? "#BBF2FF"}
            imgSrc={hover1}
          />
        ))}
      </div>
      <Navigator buttonColor={hoverColor} nextImg={nextImg} prevImg={prevImg} />
    </div>
  );
};
