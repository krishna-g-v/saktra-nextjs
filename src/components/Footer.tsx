import Image from "next/image";
import Logo from "../../public/images/logo-blue.svg";
import { HiArrowSmallRight } from "react-icons/hi2";
import { NavLinks } from "./NavLinks";
import { poppins } from "@/app/layout";
export const Footer = () => {
  return (
    <div className="h-[60vh] w-full bg-[#28001E] text-[#BBF2FF]">
      <div className="container p-10 h-full w-full">
        <div className="flex flex-col">
          <div className="flex items-baseline justify-between">
            <div className="flex flex-col">
              <Image src={Logo} alt="logoImage" />
              <div className={`info mt-12 ${poppins.className}`}>
                <div>+1 925 644 0118</div>
                <div>info@saktra.com</div>
                <div className="mt-8">
                  <p className="max-w-2/3">
                    4695 Marine Drive, Suite 104 Bangalore, Karnataka, India
                    560038
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-[#BBF2FF]">
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
            <div className="flex flex-col gilmer-regular">
              <div className="text-2xl">To subscribe to our newsletter:</div>
              <div className="input flex flex-col mt-8 placeholder-[#bbf2ff]">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="placeholder-[#bbf2ff]"
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
          <div className="border-t-1 mt-6 border-t-[#bbf2ff] font-light gilmer-regular">
            <div className="mt-12 uppercase text-[#bbf2ff] flex flex-row-reverse">
              Copyright © Saktra 2025 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
