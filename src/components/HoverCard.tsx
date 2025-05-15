import Image, { StaticImageData } from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

export interface HoverCardProps {
  hoverColor: string;
  imgSrc: StaticImageData;
  cardHeader: string;
  cardContent: string;
}

export const HoverCard = ({
  hoverColor,
  imgSrc,
  cardHeader,
  cardContent,
}: HoverCardProps) => {
  return (
    <div className="card h-85 w-90 relative cursor-pointer overflow-hidden">
      <div className="cardImage absolute top-0 left-0 h-full w-full">
        <Image src={imgSrc} alt={`${imgSrc}`} fill />
      </div>
      <div className="overlay top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="cardContent absolute top-0 left-0 h-full w-full">
        <h1 className="mt-[90%] ml-6">{cardHeader}</h1>
      </div>
      <div
        className="hover-content absolute left-0 h-full w-full top-full text-black text-[18px] z-20 flex items-start justify-center flex-col p-2.5 px-4 mb-3"
        style={{ backgroundColor: hoverColor }}
      >
        <h1 className="text-2xl mb-2">{cardHeader}</h1>
        <div>
          <p className="text-[14px]">{cardContent}</p>
        </div>
        <div className="mt-3 uppercase font-extrabold flex gap-2 items-center link relative">
          <a href="#">Read More</a>
          <HiArrowLongRight className="font-[300]" />
        </div>
      </div>
    </div>
  );
};
