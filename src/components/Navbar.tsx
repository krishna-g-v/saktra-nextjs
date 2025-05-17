import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { NavLinks } from "./NavLinks";
export const Navbar = () => {
  return (
    <nav className="bg-[#28001E]/50  w-full text-white absolute z-10">
      <div className="  mx-auto flex justify-between items-center">
        <div className="text-black font-extrabold text-2xl bg-[#BBF2FF] p-4 px-12 grid items-center">
          <Image src={Logo} alt="logoImage" className="mt-[-8px] ml-[-6px]" />
        </div>
        <ul className="flex space-x-4 p-4 pr-12">
          {NavLinks.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href="#"
                  className="text-[#BBF2FF] hover:text-gray-300 uppercase text-[12px]"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
