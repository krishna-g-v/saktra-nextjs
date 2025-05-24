import { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";

export const NavLinks = [
  { name: "Company", link: "/about" },
  { name: "Talent Solutions", link: "/talent" },
  { name: "Technology", link: "/technology" },
  { name: "AI Services", link: "/services" },
  { name: "Resources", link: "#" },
  { name: "Contact Us", link: "/contact" },
];

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add any weights you plan to use
  display: "swap",
});

export type SectionData = {
  header: string;
  cardContent: string;
  imgLink?: StaticImageData;
  link?: string;
};
