"use client";
import { poppins } from "@/components/NavLinks";
import { SectionData } from "./NavLinks";
import { Carousel } from "./Carousel";
import { useEffect, useState } from "react";

export const Section5 = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [useCases, setUseCases] = useState<SectionData[]>([]);

  //get use-cases data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://saktra.gmasoftinc.com/wp-json/wl/v1/posts?category=use-cases"
      );
      const data = await res.json();
      //console.log(data);
      setUseCases(
        data.map((item: any) => {
          return {
            header: item.title,
            cardContent: item.excerpt,
            imgLink: item.featured_image.url,
            link: "/case-study/" + item.slug,
          };
        })
      );
    };
    fetchData();
  }, []);

  //console.log(useCases);

  // Media query detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="section3 h-[100vh] max-sm:h-[120vh] w-full relative bg-[#e8e8e8] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5 max-sm:pt-7 pt-20 max-sm:pl-5 pl-25 flex-col">
        <div className="container text-5xl max-sm:text-[35px] text-white flex max-sm:flex-col max-sm:gap:30 md:gap-35 items-start">
          <div className="services text-[16px] text-[#28001E] min-w-fit uppercase gilroy-bold">
            Use Cases
          </div>
          <div className="gradient flex flex-col gilmer-regular max-sm:mt-20">
            <h1 className="gradient2 text-transparent bg-clip-text">
              {header}
            </h1>
            <div
              className={`mt-5 max-w-2/3 max-sm:max-w-[80%] ${poppins.className}`}
            >
              <p className="text-[18px] text-black  max-sm:text-[16px] ">
                {description}
              </p>
            </div>
          </div>
        </div>
        <Carousel
          shiftDistance="20%"
          maxCards={1}
          link="/case-study"
          data={useCases}
          cardType="Card"
          secondaryCardType="card2"
          width={isMobile ? 56 : undefined}
          height={isMobile ? "400px" : undefined}
          navigatorPosition={isMobile}
        />
      </div>
    </div>
  );
};
