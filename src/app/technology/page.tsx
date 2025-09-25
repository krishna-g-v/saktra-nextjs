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
    title: "Product Strategy",
    description:
      "We turn ideas into meaningful products. From defining your vision to creating clear tech roadmaps, we help you focus and grow with confidence.",
    image: Image1,
  },
  {
    title: "Technology Consulting",
    description:
      "Tech moves fast — we help you stay ahead. We help you choose the right tools and technologies that drive functional excellence and ensure long-term growth.",
    image: Image2,
  },
  {
    title: "Data Solutions",
    description:
      "We design systems that turn raw data into actionable insights — so you can see what’s working, what’s not, and where to go next.",
    image: Image3,
  },
  {
    title: "Full-Stack Development",
    description:
      "Turn your concepts into scalable software solutions. Our developers build custom apps and solutions that run smoothly across devices and provide a seamless user experience.",
    image: Image4,
  },
  {
    title: "Cloud Engineering",
    description:
      "Move smarter with the cloud. Whether you're migrating, optimizing, or managing your cloud infrastructure, we help you get the maximum value from your cloud investment.",
    image: Image5,
  },
  {
    title: "Cybersecurity",
    description:
      "Keep your data, systems, and digital assets safe with our proactive cybersecurity solutions. With active threat prevention and constant monitoring, we make sure your business stays protected, always.",
    image: Image6,
  },
  {
    title: "API Development & Integration",
    description:
      "Create secure, scalable APIs that link your internal systems with third-party tools. Whether it’s custom-built or complex integration, our engineers make sure your data flows smoothly and your systems work better together.",
    image: Image1,
  },
  {
    title: "DevOps & CI/CD Implementation",
    description:
      "Improve your software development lifecycle with our DevOps and CI/CD solutions. We plan, build, test, deploy, and provide complete post-ops support, helping your products go live faster and better.",
    image: Image2,
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
              Technology & Strategy Services
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
              className="text-6xl tracking-tight font-extrabold text-white max-sm:text-4xl py-2 max-w-[60%] max-sm:max-w-[98%] max-sm:text-center text-blue-gradient"
            >
              Turn Your Ideas into Market-Ready Solutions
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
              Smart, scalable systems, crafted to power your next big leap.
            </motion.h3>
            <Button
              text={"Schedule Free Consultation"}
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
        title="Let’s Build the Right Tech Together"
        description="Have a new project in mind? Want to optimize what you already have? Our team is ready to help you grow with the right mix of strategy, development, and hands-on support."
      />
      <Footer />
    </div>
  );
}

const ServicesSection2 = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center bg-[#F5F5F5] overflow-x-hidden">
      <h1 className="text-6xl text-purple-gradient max-w-[50%] max-sm:text-4xl max-sm:max-w-[95%]">
        Building Future-Ready Ecosystems, Tailored to Your Goals
      </h1>
      <p className="text-black max-w-[60%] max-sm:max-w-[95%] font-medium">
        Whether you're launching new products, modernizing your legacy systems,
        or improving data and cloud capabilities, we can help you build
        solutions that are practical, future-ready, and built for real results.
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
          End-to-End Services
        </h1>
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center text-purple-gradient">
          for Every Stage of
        </h1>
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center max-sm:w-[100%] text-purple-gradient">
          Your Digital Journey
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
    title: "Faster Go-to-Market",
    description:
      "With clear planning, faster development, and smart execution, we turn your ideas into working products, so you can get to market on time.",
    image: HImage1,
  },
  {
    title: "Lower Operational Costs",
    description:
      "Streamline your work and productivity. We automate routine tasks, update legacy systems, and solve tech hurdles to keep your operations efficient and cost-effective.",
    image: HImage2,
  },
  {
    title: "Smart Data-Driven Decisions",
    description:
      "We turn your raw data into meaningful results. With custom dashboards and powerful analytics, our experts help you track progress and make better decisions with confidence.",
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
      description="Since our inception, we’ve helped numerous global players launch faster, scale smarter, and save more. Read our case studies to see how we help businesses stay ahead of the curve."
    />
  );
};
