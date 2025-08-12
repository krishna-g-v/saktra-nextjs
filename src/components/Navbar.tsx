"use client";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { NavLinks } from "./NavLinks";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Img1 from "../../public/images/menu-images/Cpu.png";
import Img2 from "../../public/images/menu-images/Bookmark.png";
import Img3 from "../../public/images/menu-images/Radio.png";
import Img4 from "../../public/images/menu-images/Box.png";
import Img5 from "../../public/images/menu-images/File.png";
import { useRouter } from "next/navigation";

const MegaMenu = [
  {
    name: "Menu Head 1",
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    image: Img1,
  },
  {
    name: "Menu Head 2",
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    image: Img2,
  },
  {
    name: "Menu Head 3",
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    image: Img3,
  },
  {
    name: "Blog",
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    image: Img4,
    link: "/caseStudy",
  },
  {
    name: "Insights",
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    image: Img5,
    link: "/insights",
  },
];

export const Navbar = ({ isTransparent }: { isTransparent: boolean }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const spanVariants = {
    rest: { y: 0 },
    hover: { y: -40 },
  };
  const spanVariants2 = {
    rest: { y: 40 },
    hover: { y: 0 },
  };

  return (
    <nav
      className={`${
        isTransparent ? "bg-[#28001E]/50" : "bg-[#28001E]"
      } max-sm:h-13 w-full text-white absolute gilroy-bold flex items-center justify-between z-999`}
    >
      <div className="mx-auto max-sm:h-full w-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-black font-extrabold text-2xl bg-[#BBF2FF] max-sm:p-0 max-sm:h-full h-full p-4 px-12 grid items-center md:min-h-[9vh]">
          <Link href="/">
            <Image
              src={Logo}
              alt="logoImage"
              className="mt-[-8px] ml-[-6px] h-6 sm:h-8 w-auto max-sm:mx-2 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div
          className="relative max-sm:hidden"
          onMouseEnter={() => setIsMenuVisible(true)}
          onMouseLeave={() => setIsMenuVisible(false)}
        >
          <ul className="flex space-x-4 p-4 pr-12 max-sm:hidden">
            {NavLinks.map((link, index) => {
              return (
                <li key={index} className="relative group">
                  <Link
                    href={link.link}
                    className="text-[#BBF2FF] uppercase text-[14px] transition-all duration-300"
                  >
                    {/* Your existing hover animation spans */}
                    <motion.span
                      className="inline-block p-1 rounded-sm overflow-hidden relative"
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
                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#BBF2FF] transition-all duration-300 group-hover:w-full origin-left group-hover:origin-right"></span>
                </li>
              );
            })}
          </ul>
          {/* Mega Menu (Desktop only) */}
          <AnimatePresence>
            {isMenuVisible && (
              <motion.div
                key="mega-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut", type: "tween" }}
                className="absolute -left-[105%] top-[104%] w-screen bg-black/90 text-white p-8 grid grid-cols-5 gap-8 z-50 backdrop-blur-md"
              >
                {MegaMenu.map((head) => (
                  <div key={head.name}>
                    <h4
                      onClick={
                        head.link
                          ? () => {
                              setIsOpen(false);
                              router.push(head.link);
                            }
                          : () => {}
                      }
                      className="font-bold mb-2 flex items-center gap-2 hover:underline hover:text-[#BBF2FF] cursor-pointer"
                    >
                      <span>
                        <Image
                          className="w-5 h-5"
                          src={head.image}
                          alt="menu-image"
                        />
                      </span>
                      {head.name}
                    </h4>
                    {head.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block py-1 hover:underline"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile menu toggle */}
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

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={"mobile-nav"}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              duration: 0.3,
              damping: 18,
              mass: 1,
            }}
            className="md:hidden px-4 pb-4 absolute top-0 right-0 h-screen w-3/5 bg-[#28001E]/95"
          >
            <ul className="space-y-2 h-1/2 pt-50 w-full flex flex-col items-start justify-around relative">
              {NavLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <div className="overflow-hidden">
                    <motion.a
                      initial={{ opacity: 0, y: 70, skewY: 20 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : 70,
                        skewY: isOpen ? 0 : 20,
                      }}
                      exit={{
                        opacity: !isOpen ? 0 : 1,
                        y: !isOpen ? 20 : 0,
                      }}
                      transition={{
                        delay: 0.05 * index,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                      href={link.link}
                      onClick={() => setIsMenuVisible(false)}
                      className="block py-2 text-[#BBF2FF] hover:text-gray-300 uppercase text-lg"
                    >
                      {link.name}
                    </motion.a>
                  </div>
                </motion.li>
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
