"use client";
import { HiArrowLongRight } from "react-icons/hi2";
import classes from "./Button.module.css";
import { motion } from "framer-motion";

export const Button = ({
  text,
  bgColor,
  border = false,
  motionIndex,
}: {
  text: string;
  bgColor: string;
  border?: boolean;
  motionIndex?: number;
}) => {
  const buttonVariants = {
    rest: { opacity: 0, x: -90 },
    animate: { opacity: 1, x: 0 },
  };
  const spanVariants = {
    rest: { y: 0 },
    hover: { y: -40 },
  };
  const spanVariants2 = {
    rest: { y: 40 },
    hover: { y: 0 },
  };
  return (
    <motion.button
      key={motionIndex}
      whileHover="hover"
      variants={buttonVariants}
      initial="rest"
      animate="animate"
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.3, delay: 0.3, ease: "circOut" }}
      className={`uppercase bg-[${bgColor}] text-black font-bold text-[10px] md:text-[14px] p-2 mt-5 px-7 rounded-3xl flex items-center justify-center gap-2 cursor-pointer ${
        border ? "border-1 border-black" : ""
      }relative ${classes.button}`}
    >
      <motion.span variants={spanVariants} transition={{ delay: 0.2 }}>
        {text}
      </motion.span>
      <motion.span
        variants={spanVariants2}
        className="absolute left-[12%]"
        transition={{ delay: 0.2 }}
      >
        {text}
      </motion.span>
      <span>
        <HiArrowLongRight className={`${classes.arrow} text-2xl`} />
      </span>
    </motion.button>
  );
};
