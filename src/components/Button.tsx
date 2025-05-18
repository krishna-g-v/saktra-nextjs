import { HiArrowLongRight } from "react-icons/hi2";
import classes from "./Button.module.css";

export const Button = ({
  text,
  bgColor,
  border = false,
}: {
  text: string;
  bgColor: string;
  border?: boolean;
}) => {
  return (
    <button
      className={`uppercase bg-[${bgColor}] text-black font-bold text-[10px] md:text-[14px] p-2 mt-5 px-7 rounded-3xl flex items-center justify-center gap-2 cursor-pointer ${
        border ? "border-1 border-black" : ""
      }relative ${classes.button}`}
    >
      <span>{text}</span>
      <span>
        <HiArrowLongRight className={`${classes.arrow} text-2xl`} />
      </span>
    </button>
  );
};
