"use client";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

type ScreenSize = "desktop" | "mobile";

interface NavigatorProps {
  nextImg: () => void;
  prevImg: () => void;
  index?: number;
  total?: number;
  buttonColor?: string;
  screenSize?: ScreenSize;
  navigatorPosition?: boolean;
}

export const Navigator = ({
  nextImg,
  prevImg,
  index,
  total,
  buttonColor = "#bbf2ff",
  screenSize,
  navigatorPosition = false,
}: NavigatorProps) => {
  console.log(buttonColor);
  return (
    <div
      className={`absolute max-sm:bottom-14 h-20 w-full flex items-center justify-left ${
        navigatorPosition
          ? "max-sm:bottom-[-20px]"
          : screenSize === "mobile"
          ? "bottom-30"
          : "bottom-[-15]"
      }`}
    >
      <div
        className={`divider ${
          index ? "border-t-cyan-100 border-t-[0.1px]" : ""
        } h-1 w-[75%] max-sm:w-[60%] relative`}
      ></div>
      <div
        className={`${
          index ? "max-sm:w-[40%] w-[15%]" : "w-[8%]"
        } h-15 flex items-center justify-between pl-4`}
      >
        {index && (
          <div className="slide-number">
            {index?.toString().padStart(2, "0")}/
            {total?.toString().padStart(2, "0")}
          </div>
        )}
        <div className="flex gap-2  text-black text-[19px] font-extrabold max-sm:mr-3.5">
          <button
            className={`max-sm:size-6 h-10 w-10 bg-[${buttonColor}] arrow-button arrow-button-left rounded-[50%] flex items-center justify-center cursor-pointer ${
              buttonColor === "white" ? "button-white" : ""
            }`}
            onClick={prevImg}
          >
            <HiArrowSmallLeft />
          </button>
          <button
            className={`max-sm:size-6 h-10 w-10 bg-[${buttonColor}] arrow-button rounded-[50%] flex items-center justify-center cursor-pointer ${
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
        } h-1 w-[10%] max-sm:w-[5%] relative`}
      ></div>
    </div>
  );
};
