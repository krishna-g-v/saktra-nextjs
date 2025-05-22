"use client";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { NavLinks } from "./NavLinks";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const spanVariants = {
    rest: { y: 0 },
    hover: { y: -40 },
  };
  const spanVariants2 = {
    rest: { y: 40 },
    hover: { y: 0 },
  };
  return (
    <nav className="bg-[#28001E]/50 max-sm:h-13 w-full text-white absolute gilroy-bold flex items-center justify-between z-999">
      <div className="mx-auto max-sm:h-full w-full flex justify-between items-center">
        <div className="text-black font-extrabold text-2xl bg-[#BBF2FF] max-sm:p-0 max-sm:h-full p-4 px-12 grid items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="logoImage"
              className="mt-[-8px] ml-[-6px] h-6 sm:h-8 w-auto max-sm:mx-2 cursor-pointer"
            />
          </Link>
        </div>
        <ul className="flex space-x-4 p-4 pr-12 max-sm:hidden">
          {NavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.link}
                  className="text-[#BBF2FF] hover:text-gray-300 uppercase text-[14px]"
                >
                  <motion.span
                    className="inline-block p-1 rounded-sm overflow-hidden relative "
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.span
                      className="inline-block"
                      variants={spanVariants}
                      transition={{ delay: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.span
                      className="h-full w-full flex justify-center items-center absolute top-0 left-0"
                      variants={spanVariants2}
                      transition={{ delay: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                  </motion.span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#BBF2FF] focus:outline-none pr-2.5"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={"mobile-nav"}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden px-4 pb-4 absolute top-0 right-0 h-screen w-3/5 bg-[#28001E]/95"
          >
            <ul className="space-y-2 h-1/2 pt-50 w-full flex flex-col items-start justify-around relative">
              {NavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-[#BBF2FF] hover:text-gray-300 uppercase text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <CgClose
                onClick={() => setIsOpen((prev) => !prev)}
                className="absolute top-10 right-0 text-white text-2xl"
              />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
