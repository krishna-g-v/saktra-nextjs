"use client";
import Image from "next/image";
import bgImage from "../../public/images/image-2.jpg";
import { Carousel } from "./Carousel";
import { SectionData } from "./NavLinks";
import { useEffect, useState } from "react";

export const Section2 = ({ header }: { header: string }) => {
  const [sectionData, setSectionData] = useState<SectionData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://saktra.gmasoftinc.com/wp-json/wl/v1/services"
      );
      const data = await res.json();
      console.log(data.services);
      const services: SectionData[] = data.services.map((service: any) => ({
        header: service.homepage_section.title,
        cardContent: service.homepage_section.description,
        imgLink: service.hero.image.url,
        link: service.homepage_section.button.url.split("/").slice(-1)[0],
      }));
      setSectionData(services);
    };
    fetchData();
  }, []);

  return (
    <div className="section2 h-[100vh] w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full z-1 bg-[#28001e]"></div>
      <Image
        src={bgImage}
        alt="background"
        fill
        className="object-cover z-2 opacity-50 mix-blend-color"
      />
      <div className="content absolute top-0 left-0 h-full w-full z-5 max-sm:pt-7 pt-15 max-sm:pl-5 pl-25 flex flex-col pb-10">
        <div className="container text-4xl max-sm:text-[38px] text-white max-sm:flex-col flex max-sm:gap-15 gap-30 items-start">
          <div className="services text-[16px] text-[#BBF2FF] uppercase max-sm:text-[10px]">
            Services
          </div>
          <div className="gradient flex flex-col gilmer-regular">
            <h1 className="gradient text-transparent bg-clip-text p-2 max-w-[70%]">
              {header}
            </h1>
          </div>
        </div>
        <Carousel id="services-home" data={sectionData} />
      </div>
    </div>
  );
};
