"use client";
import { poppins } from "@/components/NavLinks";
import { Card } from "./Card";
import { Navigator } from "./Navigator";
import { SectionData } from "./NavLinks";

const Section5Data: SectionData[] = [
  {
    header: "Rapid Platform Modernization for a FinTech Company",
    cardContent:
      "Our team migrated a legacy banking platform to the cloud. Within 6 months, we helped the client achieve 3x faster transaction processing and seamless integration with digital payment systems.",
  },
  {
    header: "AI-Powered Claims Automation for an Insurance Provider",
    cardContent:
      "We helped a leading insurer implement an AI-driven claims processing system, reducing cycle time by 40% and improving customer satisfaction by 60%. Our intelligent workflows and predictive analytics helped minimize fraud and manual effort.",
  },
];

export const Section5 = () => {
  const nextImg = () => {};
  const prevImg = () => {};
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#e8e8e8] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-20 pl-25 flex-col">
        <div className="container text-5xl text-white flex gap-35 items-start">
          <div className="services text-[16px] text-[#28001E] min-w-fit uppercase gilroy-bold">
            Use Cases
          </div>
          <div className="gradient flex flex-col gilmer-regular">
            <h1 className="gradient2 text-transparent bg-clip-text">
              Real-World Impact.
            </h1>
            <h1 className="gradient2 text-transparent bg-clip-text pb-2">
              Proven Results.
            </h1>
            <div className={`mt-5 max-w-2/3 ${poppins.className}`}>
              <p className="text-[18px] text-black max-w-3/4">
                From AI-driven automation to global talent acquisition, we
                create solutions to solve real-world problems for businesses
                around the globe. Explore how we help industry leaders
                streamline operations, enhance customer experiences, and drive
                growth through technology and talent
              </p>
            </div>
            <div className="flex gap-3 mt-7 mb-10">
              {Section5Data.map((d, i) => {
                return (
                  <Card
                    cardType="card2"
                    key={i}
                    cardContent={d.cardContent}
                    cardHeader={d.header}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Navigator nextImg={nextImg} prevImg={prevImg} />
      </div>
    </div>
  );
};
