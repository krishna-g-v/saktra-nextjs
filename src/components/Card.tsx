import { HiArrowLongRight } from "react-icons/hi2";
import Bg2 from "../../public/images/cardBg2.jpg";
import Image from "next/image";
import classes from "./Card.module.css";
import { poppins } from "@/components/NavLinks";

export type SecondaryCardType = "card1" | "card2";

export const Card = ({
  cardHeader,
  cardContent,
  cardType,
  width,
  height,
}: {
  cardHeader: string;
  cardContent: string;
  cardType: SecondaryCardType;
  width?: number;
  height?: string;
}) => {
  const sizes =
    width !== undefined && height !== undefined
      ? `h-[${height}] w-${width}`
      : "h-60 w-[500px]";
  const cardType1 = (
    <div
      className={`${classes.card} h-65 max-sm:h-50 md:w-60 w-90 flex flex-col text-black items-left justify-center relative cursor-pointer overflow-hidden bg-[#e8e8e8] p-2.5 ${poppins.className}`}
    >
      <section className="z-10">
        <h1 className="text-[22px] mb-2">{cardHeader}</h1>
        <div>
          <p className="text-[14px]">{cardContent}</p>
        </div>
        <div
          className={`mt-3 uppercase max-w-fit font-extrabold flex gap-2 items-center ${classes.link} relative`}
        >
          <a className="text-[14px]" href="#">
            Read More
          </a>
          <HiArrowLongRight className={`${classes.arrow} text-2xl`} />
        </div>
      </section>
    </div>
  );

  const cardType2 = (
    <div
      className={`card ${sizes} flex flex-col text-black items-left justify-center relative cursor-pointer overflow-hidden p-2.5`}
    >
      <Image src={Bg2} alt="cardBackground" fill className="object-cover" />
      <div className={classes.overlay}></div>
      <div className="content z-10 text-white mt-15">
        <h1 className="text-2xl mb-2">{cardHeader}</h1>
        <div>
          <p className="text-[14px]">{cardContent}</p>
        </div>
        <div
          className={`mt-3 uppercase max-w-fit font-extrabold flex gap-2 items-center ${classes.linkWhite}  relative`}
        >
          <a className="text-[14px]" href="#">
            Read More
          </a>
          <HiArrowLongRight className="font-medium" />
        </div>
      </div>
    </div>
  );

  return cardType === "card1" ? cardType1 : cardType2;
};
