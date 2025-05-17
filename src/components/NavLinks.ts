import { StaticImageData } from "next/image";

export const NavLinks = [
  { name: "Company" },
  { name: "Talent Solutions" },
  { name: "Technology" },
  { name: "AI Services" },
  { name: "Resources" },
  { name: "Contact Us" },
];

export type SectionData = {
  header: string;
  cardContent: string;
  imgLink?: StaticImageData;
};
