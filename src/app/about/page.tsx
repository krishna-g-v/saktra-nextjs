"use client";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/images/image-2.jpg";
import banner from "@/../public/images/banner1.png";
import { Footer } from "@/components/Footer";
import { easeInOut, motion } from "framer-motion";
import { Button } from "@/components/Button";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

import PageCTA from "@/components/PageCTA";
import { cleanHTMLContent } from "../page";

export default function About() {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://157.173.218.78:8080/wp-json/wl/v1/about-us"
      );
      const about = await res.json();
      setData(about);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div className="gilroy-regular text-black">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.1, ease: easeInOut }}
        className="banner w-full h-[65vh] max-sm:h-[100vh] relative bg-[#28001e] z-1"
      >
        <Image
          src={img1}
          alt="Services Page Banner"
          fill
          className="object-cover opacity-100 mix-blend-color z-2"
        />
        <div className="bannerContent absolute top-0 left-0 w-full h-full flex flex-col items-start max-sm:items-center px-10 justify-center z-10">
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
              {data["hero_section"]?.subtitle || "About Us"}
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
              className="text-6xl tracking-tight font-extrabold text-white max-sm:text-4xl max-sm:max-w-[98%] max-sm:text-center py-2 max-w-[60%] text-blue-gradient"
            >
              {data["hero_section"]?.title || "A global technology provider"}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <Button
              text={
                data["hero_section"]?.button.text || "LET'S GET YOU STARTED"
              }
              bgColor="#BBF2FF"
            />
          </div>
        </div>
      </motion.div>
      <ServicesSection2 data={data} />
      <MidBanner
        title={data["page_banner"]?.title}
        description={data["page_banner"]?.description}
        url={data["page_banner"]?.image?.url || banner}
      />
      <ScrollSplitSection
        items={data["about_subsection_items"]}
        left_title={data["about_subsection_tilte"]}
      />
      <EndToEnd teamData={data["team_section"]} />
      <PageCTA
        background="[#28001E]"
        title="Let's Build the Next Together"
        description="Whether you're looking to strengthen your digital footprint, expand your capabilities, or reimagine your operations — at Saktra, we can help.
        Partner with us and turn today’s possibilities into tomorrow’s results."
      />
      <Footer />
    </div>
  );
}

const ServicesSection2 = ({ data }: { data: any }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-[#F5F5F5] overflow-x-hidden max-sm:py-5">
      <h1 className="text-6xl text-purple-gradient max-w-[50%] py-2 max-sm:text-4xl max-sm:max-w-[95%]">
        {data["page_heading"]?.title || "Technology + Talent"}
      </h1>
      <p
        className="text-black max-w-[70%] max-sm:max-w-[95%] font-medium text-[18px]"
        dangerouslySetInnerHTML={{
          __html: data["page_heading"]?.description as string,
        }}
      ></p>
    </div>
  );
};

const MidBanner = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-[40vh] max-sm:h-[70vh] relative">
      <Image
        src={url}
        fill
        alt="banner-image"
        className="absolute top-0 left-0 object-cover"
      />
      <div
        className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center px-30 max-sm:px-5"
        style={{
          background: "linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0))",
        }}
      >
        <h1 className="text-blue-gradient text-6xl max-sm:text-4xl">
          {title || "Our Mission"}
        </h1>
        <p className="mt-4 text-white text-xl max-w-[40%] max-sm:max-w-[80%]">
          {description}
        </p>
      </div>
    </div>
  );
};

// const VerticalCardsData: ServiceVerticalCardProps[] = [
//   {
//     title: "Excellence",
//     description:
//       "With a focus on quality, we constantly push the boundaries of performance and strive to deliver superior results for our clients, stakeholders, and partners.",
//     image: Image1,
//   },
//   {
//     title: "Innovation",
//     description:
//       "Technology is always evolving – and so are we. We challenge norms, leverage cutting-edge technologies, and bring fresh perspectives to the table – that solve complex problems and drive meaningful results.",
//     image: Image2,
//   },
//   {
//     title: "Integrity",
//     description:
//       "Integrity is at the heart of how we work. We establish clear objectives, set transparent goals, ensure accountability, and stick to our deadlines and promises.",
//     image: Image3,
//   },
//   {
//     title: "Partnership",
//     description:
//       "We prioritize collaboration and open communication. We have established a culture that fosters teamwork, mutual respect, shared success – where everyone feels valued and empowered to contribute.",
//     image: Image4,
//   },
// ];

gsap.registerPlugin(ScrollTrigger);

export const ScrollSplitSection = ({
  left_title,
  items,
}: {
  left_title: string;
  items: [
    {
      title: string;
      description: string;
      image: {
        url: string;
      };
    }
  ];
}) => {
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
  }, [items]);

  return (
    <div
      ref={containerRef}
      className="flex max-sm:flex-col min-h-[180vh] bg-[#F5F5F5] relative overflow-hidden max-sm:py-5"
    >
      {/* Left Side (Pinned) */}
      <div
        ref={leftRef}
        className="w-1/2 max-sm:w-full h-screen max-sm:h-auto bg-[#F5F5F5] flex flex-col items-start px-10 max-sm:px-2 max-sm:text-center justify-center font-bold sticky max-sm:static top-0 max-sm:flex max-sm:flex-col max-sm:items-center"
      >
        <h1 className="text-6xl max-sm:text-4xl max-sm:text-center text-purple-gradient">
          {left_title}
        </h1>
        <p className="max-w-[80%] max-sm:max-w-[98%] text-[22px] max-sm:text-[18px]">
          Turn your tech innovations into real-world impact with our tailored AI
          solutions. By mixing smart planning with the right technology, we turn
          AI’s promises into results you can count on.
        </p>
        <Button bgColor="transparent" text="GET STARTED" />
      </div>

      {/* Right Side (Scrolling Content) */}
      <div className="w-1/2 max-sm:w-full max-sm:p-2 max-sm:mt-5 p-10 space-y-2">
        {items &&
          items.map((vc, i) => (
            <ServiceVerticalCard
              key={vc.title}
              reverse={i % 2 !== 0}
              title={vc.title}
              description={cleanHTMLContent(vc.description) as string}
              image={vc.image.url}
            />
          ))}
      </div>
    </div>
  );
};

type ServiceVerticalCardProps = {
  title: string;
  description: string;
  image: string;
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
      <div className="serviceImage h-full w-[150%] max-sm:w-[300%] relative pl-4">
        <Image
          width={150}
          height={150}
          src={image}
          alt="Services Image"
          className="opacity-100 absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>
      <div className="serviceContent flex flex-col">
        <h2 className="text-3xl mb-3 max-sm:text-xl">{title}</h2>
        <p className="max-sm:text-[14px]">{description}</p>
      </div>
    </div>
  );
};

const EndToEnd = ({
  teamData,
}: {
  teamData: {
    title: string;
    description: string;
    members: [
      {
        name: string;
        description: string;
        featured_image: string;
        designation: string;
      }
    ];
  };
}) => {
  // console.log(teamData);
  return (
    <div className="min-h-screen bg-[#F5f5f5] flex flex-col items-center justify-center">
      <h1 className="text-6xl text-purple-gradient mt-4 max-sm:text-center max-sm:text-4xl">
        {teamData?.title || "Meet Our Team"}
      </h1>
      <div className="flex max-sm:flex-col gap-5 max-w-[90%] mt-6">
        {teamData &&
          teamData.members.map((h, i) => {
            return (
              <HorizontalCard
                key={h.name}
                title={h.name}
                description={cleanHTMLContent(h.description) as string}
                image={h.featured_image}
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
  image: StaticImageData | string;
};

const HorizontalCard = ({ title, description, image }: HorizontalCardProps) => {
  return (
    <div className="min-h-[60vh] max-sm:min-h-[30vh] max-sm:w-[90vw] w-[30vw] flex flex-col items-center justify-center shadow-lg overflow-auto max-sm:overflow-hidden rounded-xl relative">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        width={30}
        height={30}
        src={image}
        alt="card-image"
      />
      <div
        className="content text-white absolute top-0 left-0 w-full h-1/2 mt-[60%] max-sm:mt-[35%] pt-16 max-sm:pt-2 px-5"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1))",
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
