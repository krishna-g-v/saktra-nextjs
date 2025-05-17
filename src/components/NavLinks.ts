import { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";

export const NavLinks = [
  { name: "Company" },
  { name: "Talent Solutions" },
  { name: "Technology" },
  { name: "AI Services" },
  { name: "Resources" },
  { name: "Contact Us" },
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
};
