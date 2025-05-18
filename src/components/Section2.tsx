import Image from "next/image";
import bgImage from "../../public/images/image-2.jpg";
import { Carousel } from "./Carousel";
import img1 from "../../public/images/s21.jpg";
import img2 from "../../public/images/s22.jpg";
import img3 from "../../public/images/s23.jpg";
import { SectionData } from "./NavLinks";

const Section2Data: SectionData[] = [
  {
    header: "Talent Solutions",
    cardContent:
      "Scalable and agile talent acquisition strategies built for today’s fast-moving industries. Whether launching a startup or expanding globally, we help you onboard the right skill and talent quickly and cost-effectively, without the fuse",
    imgLink: img1,
  },
  {
    header: "Technology",
    cardContent:
      "From digital transformation to platform modernization, we engineer future-ready solutions that align technology with business.Our tech expertise fuels growth and enables smarter innovations across Telecom, Insurance, and Supply Chain sectors.",
    imgLink: img2,
  },
  {
    header: "AI Services",
    cardContent:
      "Transform your business with intelligent solutions that go beyond automation.We harness the power of AI to deliver practical solutions that reduce costs, streamline workflows, and deliver hyper-personalized customer experiences that deliver measurable impact",
    imgLink: img3,
  },
];

export const Section2 = () => {
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
            <h1 className="gradient text-transparent bg-clip-text p-2">
              Empowering Innovation with Talent,
            </h1>
            <h1 className="gradient text-transparent bg-clip-text p-2">
              Technology, and Intelligence
            </h1>
          </div>
        </div>
        <Carousel data={Section2Data} />
      </div>
    </div>
  );
};
