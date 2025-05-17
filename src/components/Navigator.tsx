"use client";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

interface NavigatorProps {
  nextImg: () => void;
  prevImg: () => void;
  index?: number;
  total?: number;
  buttonColor?: string;
}

export const Navigator = ({
  nextImg,
  prevImg,
  index,
  total,
  buttonColor = "#bbf2ff",
}: NavigatorProps) => {
  console.log(buttonColor);
  return (
    <div className="absolute bottom-0 h-20 w-full flex items-center justify-left">
      <div
        className={`divider ${
          index ? "border-t-cyan-100 border-t-[0.1px]" : ""
        } h-1 w-[75%] relative`}
      ></div>
      <div
        className={`${
          index ? "w-[15%]" : "w-[8%]"
        } h-15 flex items-center justify-between pl-4`}
      >
        {index && (
          <div className="slide-number">
            {index?.toString().padStart(2, "0")}/
            {total?.toString().padStart(2, "0")}
          </div>
        )}
        <div className="flex gap-2  text-black text-[19px] font-extrabold ">
          <button
            className={`h-10 w-10 bg-[${buttonColor}] rounded-[50%] flex items-center justify-center cursor-pointer ${
              buttonColor === "white" ? "button-white" : ""
            }`}
            onClick={prevImg}
          >
            <HiArrowSmallLeft />
          </button>
          <button
            className={`h-10 w-10 bg-[${buttonColor}] rounded-[50%] flex items-center justify-center cursor-pointer ${
              buttonColor === "white" ? "button-white" : ""
            }`}
            onClick={nextImg}
          >
            <HiArrowSmallRight />
          </button>
        </div>
      </div>
      <div
        className={`divider ${
          index ? "border-t-cyan-100 border-t-[0.1px]" : ""
        } h-1 w-[10%] relative`}
      ></div>
    </div>
  );
};
