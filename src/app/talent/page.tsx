// "use client";
// import Image from "next/image";
// import { TabBar } from "@/components/TabBar";
// import { Footer } from "@/components/Footer";
// import { easeInOut, motion } from "framer-motion";
// import img1 from "../../../public/images/s21.jpg";

// export default function Home() {
//   return (
//     <div className="w-[100vw] min-h-[100vh] bg-white absolute top-0 left-0 text-black .gilroy-regular">
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.1, ease: easeInOut }}
//         className="banner w-full h-[45vh] relative"
//       >
//         <Image
//           src={img1}
//           alt="Services Page Banner"
//           style={{ objectPosition: "center 20%" }}
//           fill
//           className="object-cover bg-purple-400"
//         />
//         <div className="bg-[#2b0b1d] opacity-70 absolute top-0 left-0 w-full h-full"></div>
//         <div className="bannerContent absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{ y: 100 }}
//               animate={{ y: 0 }}
//               transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
//               className="text-6xl font-extrabold text-white max-sm:text-4xl"
//             >
//               Our Services
//             </motion.h1>
//           </div>
//           <div className="overflow-hidden">
//             <motion.h3
//               initial={{ y: 100 }}
//               animate={{ y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 type: "tween",
//                 ease: "easeInOut",
//                 delay: 0.1,
//               }}
//               className="text-3xl font-medium text-white mt-5 max-sm:text-[18px] max-sm:px-2.5 max-sm:text-center"
//             >
//               Comprehensive IT solutions tailored to meet the unique challenges
//               of your business
//             </motion.h3>
//           </div>
//         </div>
//       </motion.div>
//       <div className="content mt-16 w-full flex justify-center">
//         <TabBar showIndex={0} />
//       </div>
//       <Footer />
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Image1 from "@/../public/images/ServiceCards/ServiceCard1.png";
import Image2 from "@/../public/images/ServiceCards/ServiceCard2.png";
import Image3 from "@/../public/images/ServiceCards/ServiceCard3.png";
import Image4 from "@/../public/images/ServiceCards/ServiceCard4.png";
import Image5 from "@/../public/images/ServiceCards/ServiceCard5.png";
import Image6 from "@/../public/images/ServiceCards/ServiceCard6.png";

import HImage1 from "@/../public/images/ServiceCards/HorizontalCard1.png";
import HImage2 from "@/../public/images/ServiceCards/HorizontalCard2.png";
import HImage3 from "@/../public/images/ServiceCards/HorizontalCard3.png";

import Image, { StaticImageData } from "next/image";
import { Footer } from "@/components/Footer";
import { easeInOut, motion } from "framer-motion";
import img1 from "../../../public/images/image-2.jpg";
import { Button } from "@/components/Button";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { Section5 } from "@/components/Section5";
import PageCTA from "@/components/PageCTA";

const VerticalCardsData: ServiceVerticalCardProps[] = [
  {
    title: "Staff Augmentation",
    description:
      "Manage peaks in workload and add specialized skills to your team without the long-term commitment. Our flexible staff augmentation solutions let you scale your resources up or down as needed.",
    image: Image1,
  },
  {
    title: "Direct Hire",
    description:
      "Find the perfect long-term fit for your team. We source, screen, and shortlist top-tier talent who have both the skills and experience required for your specific business processes.",
    image: Image2,
  },
  {
    title: "Head Hunting & Executive Hiring",
    description:
      "From CXOs to senior specialists, hire high-impact leaders effortlessly. Our rigorous search process helps you find and onboard world-class talent who can take your business to the next level.",
    image: Image3,
  },
  {
    title: "Build-Operate-Transfer (BOT)",
    description:
      "Set up your offshore team efficiently with us. We’ll build and run your offshore teams, taking care of hiring, infrastructure, and operations – till you are ready to take over your global operations. ",
    image: Image4,
  },
  {
    title: "Master Vendor",
    description:
      "Simplify the sourcing, recruitment, and onboarding of your contingent workforce with us. We’ll take care of the entire recruitment and administrative process, so you can focus on growth without administrative hassles.",
    image: Image5,
  },
  {
    title: "Niche Skill Hiring",
    description:
      "Need experts in AI, cloud security, DevSecOps, or other emerging tech? We can help you find rare, high-demand talent that can take your business to new heights.",
    image: Image6,
  },
];

export default function Services() {
  return (
    <div className="w-[100vw] min-h-[100vh] overflow-x-hidden bg-white absolute top-0 left-0 text-black gilroy-regular">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.1, ease: easeInOut }}
        className="banner w-full max-sm:h-[100vh] h-[65vh] relative bg-[#28001e] z-1"
      >
        <Image
          src={img1}
          alt="Services Page Banner"
          fill
          className="object-cover opacity-100 mix-blend-color z-2"
        />
        <div className="bannerContent absolute top-0 left-0 w-full h-full flex flex-col max-sm:items-center items-start px-10 justify-center z-10">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
                delay: 0.1,
              }}
              className="text-[18px] font-medium text-white mt-5 max-sm:text-[16px] max-sm:px-2.5 max-sm:text-center"
            >
              Talent Solutions
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
              className="text-6xl tracking-tight font-extrabold text-white max-sm:text-4xl py-2 max-w-[60%] max-sm:max-w-[98%] max-sm:text-center text-blue-gradient"
            >
              Build Global Teams Without Borders & Bottlenecks
            </motion.h1>
          </div>
          <div className="overflow-hidden max-sm:flex max-sm:flex-col max-sm:items-center">
            <motion.h3
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
                delay: 0.1,
              }}
              className="text-[20px] max-w-[70%] max-sm:max-w-[100%] font-medium text-white mt-5 max-sm:text-[18px] max-sm:px-2.5 max-sm:text-center"
            >
              End-to-end Talent Solutions, designed to help you scale quickly
              and smartly.
            </motion.h3>
            <Button
              text={"Book Free Consultation"}
              bgColor="#BBF2FF"
              link="/contact"
            />
          </div>
        </div>
      </motion.div>
      <ServicesSection2 />
      <ScrollSplitSection />
      <EndToEnd />
      <ResultsSection />
      <PageCTA
        background="[#28001E]"
        title="Let’s Make Hiring Smarter, Faster, and Simpler"
        description="Talk to us about your hiring goals, and we’ll help you build the team that gets you there — without the delays, costs, or confusion."
      />
      <Footer />
    </div>
  );
}

const ServicesSection2 = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center bg-[#F5F5F5] overflow-x-hidden">
      <h1 className="text-6xl text-purple-gradient max-w-[50%] max-sm:text-4xl max-sm:max-w-[95%]">
        Specialized Skills, on Demand
      </h1>
      <p className="text-black max-w-[60%] max-sm:max-w-[95%] font-medium">
        Find, attract, and retain top global talent — without the delays,
        overheads, or hiring headaches. Whether you’re growing your team,
        filling a critical role, or setting up a new offshore operation, we help
        you find the right talent that aligns perfectly with your project goals
        and company culture.
      </p>
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

const ScrollSplitSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.innerWidth > 640; // Tailwind's "sm" breakpoint (640px)

    const ctx = gsap.context(() => {
      if (isDesktop) {
        // Only pin left section on desktop
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: leftRef.current,
          pinSpacing: false,
          scrub: false,
        });
      }

      // Animate cards on scroll for all screen sizes
      gsap.utils.toArray<HTMLElement>(".card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: i % 2 === 0 ? 50 : -50,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex max-sm:flex-col min-h-[260vh] bg-[#F5F5F5] relative overflow-hidden"
    >
      {/* Left Side */}
      <div
        ref={leftRef}
        className="w-1/2 max-sm:w-full h-screen max-sm:h-auto bg-[#F5F5F5] flex flex-col items-start pl-10 pr-10 justify-center font-bold sticky max-sm:static top-0 max-sm:flex max-sm:flex-col max-sm:items-center"
      >
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center text-purple-gradient">
          Comprehensive Talent
        </h1>
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center text-purple-gradient">
          Solutions That Work
        </h1>
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center max-sm:w-[100%] text-purple-gradient">
          the Way You Do
        </h1>
        <p className="max-w-[80%] max-sm:w-[100%] max-sm:max-w-full text-[22px] max-sm:text-[18px] max-sm:text-center max-sm:mt-5">
          At Saktra, we help businesses evolve by combining strategy,
          technology, and execution. Our services are designed to support you
          through every step of your digital transformation.
        </p>
        <Button bgColor="transparent" text="GET STARTED" link="/contact" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 max-sm:w-full max-sm:p-2 max-sm:mt-5 p-10 space-y-2">
        {VerticalCardsData.map((vc, i) => (
          <ServiceVerticalCard
            key={vc.title}
            reverse={i % 2 !== 0}
            title={vc.title}
            description={vc.description}
            image={vc.image}
          />
        ))}
      </div>
    </div>
  );
};

type ServiceVerticalCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean;
};
const ServiceVerticalCard = ({
  title,
  description,
  image,
  reverse = false,
}: ServiceVerticalCardProps) => {
  return (
    <div
      className={`card border p-4 bg-white h-[40vh] border-[#d9d9d9] flex ${
        reverse ? "flex-row-reverse" : ""
      } items-center w-full gap-5 justify-between`}
    >
      <div className="serviceImage h-full w-[150%] relative pl-4 max-sm:w-[300%]">
        <Image
          src={image}
          alt="Services Image"
          className="opacity-100 absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>
      <div className="serviceContent flex flex-col">
        <h2 className="text-3xl max-sm:text-xl mb-3">{title}</h2>
        <p className="max-sm:text-[14px]">{description}</p>
      </div>
    </div>
  );
};

const HorizontalCardData = [
  {
    title: "Faster Time-to-Hire",
    description:
      "Our streamlined recruitment workflows and ready talent pool help you reduce hiring time and get the right talent on board quickly, efficiently, and when you need them the most.",
    image: HImage1,
  },
  {
    title: "Flexible & Scalable Deployment",
    description:
      "Scale resources up or down as per your budget and project requirements. Our staffing models give you the flexibility to onboard resources with/ without long-term commitments.",
    image: HImage2,
  },
  {
    title: "Global Talent Pool",
    description:
      "Build cross-border teams with confidence. We connect you with skilled professionals from around the world – minus legal, cultural, or logistical challenges.",
    image: HImage3,
  },
];

const EndToEnd = () => {
  return (
    <div className="min-h-screen bg-[#F5f5f5] flex flex-col items-center justify-center">
      <h1 className="text-6xl max-sm:text-4xl max-sm:text-center text-purple-gradient mt-4">
        Expert Solutions
      </h1>
      <h1 className="text-6xl text-purple-gradient max-sm:text-4xl max-sm:text-center">
        That Help You Scale Faster
      </h1>
      <div className="flex gap-5 max-w-[90%] mt-6 overflow-x-auto scrollbar-hide">
        {HorizontalCardData.map((h, i) => {
          return (
            <HorizontalCard
              key={h.title}
              title={h.title}
              description={h.description}
              image={h.image}
              index={i + 1}
            />
          );
        })}
      </div>
      <div className="w-full flex gap-2 items-center justify-end max-w-[90%] mt-4">
        <button
          className="max-sm:size-6 h-10 w-10 bg-[#BBF2FF] arrow-button arrow-button-left rounded-[50%] flex items-center justify-center cursor-pointer text-[#28001E]"
          onClick={() => {}}
        >
          <HiArrowSmallLeft />
        </button>
        <button
          className="max-sm:size-6 h-10 w-10 bg-[#BBF2FF] arrow-button arrow-button-left rounded-[50%] flex items-center justify-center cursor-pointer text-[#28001E]"
          onClick={() => {}}
        >
          <HiArrowSmallRight />
        </button>
      </div>
    </div>
  );
};

type HorizontalCardProps = {
  index: number;
  title: string;
  description: string;
  image: StaticImageData;
};

const HorizontalCard = ({ title, description, image }: HorizontalCardProps) => {
  return (
    <div className="bg-[#f7f7f7] min-h-[70vh] w-[36%] max-sm:min-w-[90vw] max-sm:mb-5 p-4 flex flex-col items-center justify-center shadow-lg overflow-auto rounded-xl">
      <Image src={image} alt="card-image" />
      <h2 className="text-center text-2xl mb-2">{title}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

const ResultsSection = () => {
  return (
    <Section5
      header="Real Business, Real Impact"
      description="See how we helped clients build smart, scalable businesses. Learn about the roles we filled, the tech solutions we provided, and the measurable impact we created for companies around the world."
    />
  );
};
