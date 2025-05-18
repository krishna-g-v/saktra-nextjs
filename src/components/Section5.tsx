"use client";
import { poppins } from "@/components/NavLinks";
import { SectionData } from "./NavLinks";
import { Carousel } from "./Carousel";

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
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#e8e8e8] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5 max-sm:pt-7 pt-20 max-sm:pl-5 pl-25 flex-col">
        <div className="container text-5xl max-sm:text-[35px] text-white flex max-sm:flex-col max-sm:gap:30 md:gap-35 items-start">
          <div className="services text-[16px] text-[#28001E] min-w-fit uppercase gilroy-bold">
            Use Cases
          </div>
          <div className="gradient flex flex-col gilmer-regular max-sm:mt-20">
            <h1 className="gradient2 text-transparent bg-clip-text">
              Real-World Impact.
            </h1>
            <h1 className="gradient2 text-transparent bg-clip-text pb-2">
              Proven Results.
            </h1>
            <div
              className={`mt-5 max-w-2/3 max-sm:max-w-[80%] ${poppins.className}`}
            >
              <p className="text-[18px] text-black  max-sm:text-[16px] ">
                From AI-driven automation to global talent acquisition, we
                create solutions to solve real-world problems for businesses
                around the globe. Explore how we help industry leaders
                streamline operations, enhance customer experiences, and drive
                growth through technology and talent
              </p>
            </div>
          </div>
        </div>
        <Carousel
          data={Section5Data}
          cardType="Card"
          secondaryCardType="card2"
          width={56}
          height={"400px"}
          navigatorPosition={true}
        />
      </div>
    </div>
  );
};
