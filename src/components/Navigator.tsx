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
  disableNext: boolean;
  disablePrev: boolean;
  navigatorPosition?: boolean;
  section?: string;
}

export const Navigator = ({
  nextImg,
  prevImg,
  index,
  total,
  buttonColor = "#bbf2ff",
  screenSize,
  disableNext,
  disablePrev,
  navigatorPosition = false,
  section = "other",
}: NavigatorProps) => {
  return (
    <div
      className={`absolute h-20 z-10  w-full flex items-center justify-left 
        ${
          section === "section4" && screenSize === "mobile"
            ? "max-sm:bottom-44"
            : section === "section4"
            ? "bottom-25"
            : navigatorPosition
            ? "max-sm:bottom-[-20px]"
            : screenSize === "mobile"
            ? "bottom-30"
            : "bottom-10"
        }
      `}
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
        <div className="flex gap-2 text-black text-[19px] font-extrabold max-sm:mr-3.5">
          <button
            disabled={disablePrev}
            onClick={prevImg}
            className={`max-sm:size-6 h-10 w-10 rounded-full flex items-center justify-center
      ${
        disablePrev
          ? "opacity-40 cursor-not-allowed"
          : "cursor-pointer hover:scale-110"
      }
      ${buttonColor === "white" ? "bg-white" : ""}
    `}
            style={{ backgroundColor: buttonColor }}
          >
            <HiArrowSmallLeft />
          </button>

          <button
            disabled={disableNext}
            onClick={nextImg}
            className={`max-sm:size-6 h-10 w-10 rounded-full flex items-center justify-center
      ${
        disableNext
          ? "opacity-40 cursor-not-allowed"
          : "cursor-pointer hover:scale-110 hover:text-black hover:border-black hover:border-2"
      }
      ${buttonColor === "white" ? "bg-white" : buttonColor}
    `}
            style={{ backgroundColor: buttonColor }}
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
