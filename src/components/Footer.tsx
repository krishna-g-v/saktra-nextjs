import Image from "next/image";
import Logo from "../../public/images/logo-blue.svg";
import { HiArrowSmallRight } from "react-icons/hi2";
import { NavLinks } from "./NavLinks";
import { poppins } from "@/components/NavLinks";
export const Footer = () => {
  return (
    <div className="h-[63vh] max-sm:h-[70vh] w-full bg-[#28001E] text-[#BBF2FF]">
      <div className="container p-10 max-sm:p-4 h-full w-full">
        <div className="flex flex-col">
          <div className="flex items-baseline justify-between">
            <div className="flex flex-col max-sm:text-[12px]">
              <Image src={Logo} alt="logoImage" className="max-md:size-14" />
              <div className={`info mt-12 max-sm:mt-5 ${poppins.className}`}>
                <div>+1 925 644 0118</div>
                <div>info@saktra.com</div>
                <div className="mt-8">
                  <p className="max-w-2/3">Corporate Head Office,</p>
                  <p className="max-w-2/3">
                    200 Centennial Ave Suite #206 Piscataway, NJ 08854
                  </p>
                  <p className="max-w-2/3 mt-2">West Coast Regional Office,</p>
                  <p className="max-w-2/3">
                    5201 Great America Pkwy Suite #320 Santa Clara, CA 95054
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-[#BBF2FF] max-sm:pt-5">
              <div className="text-[#BBF2FF] text-[12px]">Quick Links</div>
              <ul className="mt-8 uppercase gilroy-bold">
                {NavLinks.map((link) => {
                  return (
                    <li key={link.name}>
                      <a className="text-[14px]" href="#">
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gilmer-regular max-sm:hidden">
              <div className="text-2xl max-sm:text-[20px]">
                To subscribe to our newsletter:
              </div>
              <div className="input flex flex-col mt-8 placeholder-[#bbf2ff]">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="placeholder-[#bbf2ff] max-sm:w-3/5"
                />
                <div className="flex gap-1 items-center justify-between mt-2.5 ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-[80%] placeholder-[#bbf2ff]"
                    placeholder="Email"
                  />
                  <button
                    className={`h-10 w-10 bg-[#BBF2FF] rounded-[50%] flex items-center justify-center cursor-pointer text-black
                                }`}
                  >
                    <HiArrowSmallRight />
                  </button>
                </div>
              </div>
              <div className="mt-2.5 text-[12px]">
                By signing up you agree with our{" "}
                <a className="underline" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gilmer-regular md:hidden mt-3">
            <div className="text-2xl max-sm:text-[20px]">
              To subscribe to our newsletter:
            </div>
            <div className="input flex flex-col mt-8 placeholder-[#bbf2ff]">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="placeholder-[#bbf2ff] max-sm:w-3/5"
              />
              <div className="flex gap-1 items-center justify-between mt-2.5 ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[80%] placeholder-[#bbf2ff]"
                  placeholder="Email"
                />
                <button
                  className={`h-10 w-10 bg-[#BBF2FF] rounded-[50%] flex items-center justify-center cursor-pointer text-black
                                }`}
                >
                  <HiArrowSmallRight />
                </button>
              </div>
            </div>
            <div className="mt-2.5 text-[12px]">
              By signing up you agree with our{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="border-t-1 border-t-[#bbf2ff] font-light gilmer-regular max-sm:mt-5 md:mt-12 max-sm:mb-8">
            <div className="mt-4 uppercase text-[#bbf2ff] flex flex-row-reverse text-[14px]">
              Copyright © Saktra 2025 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
