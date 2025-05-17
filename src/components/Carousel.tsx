"use client";
import { HoverCard } from "./HoverCard";
import hover1 from "../../public/images/hoverCard1.png";
import { Navigator } from "./Navigator";
import { useState } from "react";

export interface CarouselProps<T> {
  data: T[];
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
        {data.map((_, i) => (
          <HoverCard
            key={i}
            cardContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eligendi! Quibusdam maiores odio corrupti nesciunt ipsam assumenda a cupiditate nemo! Quibusdam maiores odio corrupti nesciunt ipsam assumenda a cupiditate nemo!"
            cardHeader="Card Header"
            hoverColor={hoverColor ?? "#BBF2FF"}
            imgSrc={hover1}
          />
        ))}
      </div>
      <Navigator buttonColor={hoverColor} nextImg={nextImg} prevImg={prevImg} />
    </div>
  );
};
