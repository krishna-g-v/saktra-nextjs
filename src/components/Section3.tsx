import Image from "next/image";
import bgImage from "../../public/images/image-3.png";
import { Carousel } from "./Carousel";
import { SectionData } from "./NavLinks";
import img1 from "../../public/images/technology.jpg";
import img2 from "../../public/images/telecom.jpg";
import img3 from "../../public/images/Ecommerce.jpg";

const Section3Data: SectionData[] = [
  {
    header: "Technology",
    cardContent:
      "We help tech innovators lead with agile talent and cutting-edge digital solutions. From product development to cloud transformation, we empower software firms, IT service providers, and startups to build faster, scale smarter, and stay ahead of disruption.",
    imgLink: img1,
  },
  {
    header: "Telecom",
    cardContent:
      "We empower telecom providers to evolve with speed and confidence. From 5G deployment to modernizing legacy networks, we deliver the tools, talent, and technology needed to drive connectivity and innovation at scale.",
    imgLink: img2,
  },
  {
    header: "Ecommerce",
    cardContent:
      "We help eCommerce businesses elevate both performance and personalization. With scalable platforms and AI-powered technologies, we drive growth across digital marketplaces, improving online customer experiences at every touchpoint.",
    imgLink: img3,
  },
  {
    header: "FinTech",
    cardContent:
      "With a customer-first approach, we help FinTech companies deliver secure, scalable products to market. Our technology solutions help businesses innovate, automate, and launch new products and partnerships faster, for a more nimble time to market.",
  },
  {
    header: "Insurance",
    cardContent:
      "We support insurers in modernizing core systems, enhancing policyholder experiences, and managing risk through AI and automation. Our strategic technology and talent solutions empower P&C, life, and health insurance providers to operate smarter and serve faster.",
  },
  {
    header: "Supply Chain",
    cardContent:
      "From real-time visibility to intelligent automation, we help supply chain leaders stay agile, efficient, and resilient. Our solutions power end-to-end transformation and help businesses optimize and accelerate their operations.",
  },
  {
    header: "Security",
    cardContent:
      "We enable businesses to stay secure in a rapidly evolving threat landscape. Our experts devise robust cybersecurity strategies, facilitate AI-driven threat detection, and deliver compliance-ready frameworks, helping you protect business-critical infrastructure across ecosystems.",
  },
];

export const Section3 = () => {
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#F5F5F5] overflow-hidden">
      <div className="h-[70vh] overflow-hidden relative">
        <Image
          src={bgImage}
          alt="background"
          fill
          className="h-[100%] object-cover"
        />
      </div>
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-25 pl-25 flex flex-col">
        <div className="container text-5xl text-white flex gap-30 items-start">
          <div className="services text-[16px] text-[#BBF2FF] uppercase">
            Industries
          </div>
          <div className="gradient flex flex-col">
            <h1 className="gradient text-transparent bg-clip-text">
              Building What’s Next for
            </h1>
            <h1 className="gradient text-transparent bg-clip-text">
              the World’s Top Industries
            </h1>
          </div>
        </div>
        <Carousel data={Section3Data} />
      </div>
    </div>
  );
};
