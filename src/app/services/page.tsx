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
    title: "AI Consulting & Strategy",
    description:
      "Expand your business capabilities with our tailored AI strategies. We align your business goals with the right technologies to ensure scalable, impactful, and future-ready AI adoption.",
    image: Image1,
  },
  {
    title: "Generative AI Development",
    description:
      "Automate routine tasks and generate high-quality content in seconds. Our intelligent AI models adapt to your business needs and help your business work smarter and scale faster.",
    image: Image2,
  },
  {
    title: "AI Bots",
    description:
      "Make customer interactions faster and smarter with our AI-powered bots that understand users better, respond naturally, and deliver personalized, real-time support at scale.",
    image: Image3,
  },
  {
    title: "AI Product Development",
    description:
      "Turn your AI ideas into real products. Whether it’s predictive analytics, recommendation engines, or intelligent automation, we build AI-driven applications tailored to your unique needs.",
    image: Image4,
  },
  {
    title: "AI Integration",
    description:
      "Boost your existing systems with the power of AI. We integrate advanced AI tools into your current workflow for better insights, faster decisions, and improved performance – without any disruption.",
    image: Image5,
  },
  {
    title: "AI Agent / Copilot",
    description:
      "Build an intelligent work partner that helps you do more. Our AI agents automate tasks, deliver insights, and enhance decision-making — all while working alongside your existing tools.",
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
              Artificial Intelligence Services
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
              className="text-6xl tracking-tight font-extrabold text-white max-sm:text-4xl py-2 max-w-[60%] max-sm:max-w-[98%] max-sm:text-center text-blue-gradient"
            >
              Advanced Intelligence for your business
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
              Innovate, accelerate, and fuel your business growth with
              insight-driven AI technologies
            </motion.h3>
            <Button text={"LET'S GET YOU STARTED"} bgColor="#BBF2FF" />
          </div>
        </div>
      </motion.div>
      <ServicesSection2 />
      <ScrollSplitSection />
      <EndToEnd />
      <ResultsSection />
      <PageCTA
        background="[#28001E]"
        title="Let's Make AI Work for You"
        description="Connect with us to discuss how AI can support your journey toward smarter operations, better customer experiences, and real business growth."
      />
      <Footer />
    </div>
  );
}

const ServicesSection2 = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center bg-[#F5F5F5] overflow-x-hidden">
      <h1 className="text-6xl text-purple-gradient max-w-[50%] max-sm:text-4xl max-sm:max-w-[95%]">
        Power Your Business with Smarter AI Solutions
      </h1>
      <p className="text-black max-w-[60%] max-sm:max-w-[95%] font-medium">
        Discover the Next with the power of AI. Whether you’re looking to boost
        efficiency, spark innovation, or open new revenue streams, we build
        tailored AI solutions that help your business move smarter and grow
        faster.
      </p>
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

export const ScrollSplitSection = () => {
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
          Artificial Intelligence
        </h1>
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center text-purple-gradient">
          Development Services
        </h1>
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center max-sm:w-[100%] text-purple-gradient">
          We Provide
        </h1>
        <p className="max-w-[80%] max-sm:w-[100%] max-sm:max-w-full text-[22px] max-sm:text-[18px] max-sm:text-center max-sm:mt-5">
          Turn your tech innovations into real-world impact with our tailored AI
          solutions. By mixing smart planning with the right technology, we turn
          AI’s promises into results you can count on.
        </p>
        <Button bgColor="transparent" text="GET STARTED" />
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
    title: "Reduced Operational Costs",
    description:
      "Automate time-consuming tasks across departments. Our custom AI solutions help you cut through inefficiencies, maximize team output, and scale your business without growing your headcount.",
    image: HImage1,
  },
  {
    title: "Improved Customer Experience",
    description:
      "Provide real-time support to your customers and teams with AI-powered agents. From resolving queries to guiding decisions, AI delivers round-the-clock assistance and a consistent brand experience at every touchpoint.",
    image: HImage2,
  },
  {
    title: "Better Decision Making",
    description:
      "Leverage the power of AI to turn data into actionable insights. From forecasting trends to identifying risks, our AI solutions empower your teams to make smarter decisions, faster.",
    image: HImage3,
  },
];

const EndToEnd = () => {
  return (
    <div className="min-h-screen bg-[#F5f5f5] flex flex-col items-center justify-center">
      <h1 className="text-6xl max-sm:text-4xl max-sm:text-center text-purple-gradient mt-4">
        Maximize Business Impact with
      </h1>
      <h1 className="text-6xl text-purple-gradient max-sm:text-4xl max-sm:text-center">
        Our End-to-End AI Support
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
      description="Dive into our case studies to see how we help our clients save time, reduce costs, and drive innovation. Learn about the challenges we faced, the custom AI solutions we implemented, and the measurable results that followed."
    />
  );
};
