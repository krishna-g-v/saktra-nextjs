"use client";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/images/image-2.jpg";
import banner from "@/../public/images/banner1.png";
import { Footer } from "@/components/Footer";
import { easeInOut, motion } from "framer-motion";
import { Button } from "@/components/Button";

import { useEffect, useRef, useState } from "react";
import { ScrollSplitSection } from "@/components/ScrollSplit";

import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

import PageCTA from "@/components/PageCTA";
import { cleanHTMLContent } from "@/app/utils/utility";

export default function About() {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://saktra.gmasoftinc.com/wp-json/wl/v1/about-us"
      );
      const about = await res.json();
      console.log(about);
      setData(about);
    };
    getData();
  }, []);
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
              link="/contact"
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  // Scroll handling
  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 50
      : 300; // fallback
    const scrollAmount = cardWidth + 20; // include some gap

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Detect scroll position to disable/enable arrows
  const updateArrowState = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScrollLeft = scrollWidth - clientWidth - 5; // small buffer
    //console.log({ scrollLeft, maxScrollLeft });
    setDisableLeft(scrollLeft <= 5);
    setDisableRight(scrollLeft >= maxScrollLeft);
  };

  // Attach listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateArrowState);
    updateArrowState();

    return () => {
      container.removeEventListener("scroll", updateArrowState);
    };
  }, [teamData]);

  return (
    <div className="min-h-screen bg-[#F5f5f5] flex flex-col items-center justify-center">
      <h1 className="text-6xl text-purple-gradient mt-4 max-sm:text-center max-sm:text-4xl">
        {teamData?.title || "Meet Our Team"}
      </h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto max-sm:flex-col gap-5 max-w-[90%] mt-6"
      >
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
          disabled={disableLeft}
          className={`max-sm:size-6 h-10 w-10 ${
            disableLeft ? "bg-gray-400" : "bg-[#BBF2FF]"
          }  rounded-[50%] flex items-center justify-center cursor-pointer text-[#28001E] transition-opacity ${
            disableLeft ? "opacity-50 cursor-none" : ""
          }`}
          onClick={() => {
            handleScroll("left");
          }}
        >
          <HiArrowSmallLeft />
        </button>
        <button
          disabled={disableRight}
          className={`max-sm:size-6 h-10 w-10 ${
            disableRight ? "bg-gray-400" : "bg-[#BBF2FF]"
          } rounded-[50%] flex items-center justify-center cursor-pointer text-[#28001E] transition-opacity ${
            disableRight ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            handleScroll("right");
          }}
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
    <div className="min-h-[60vh] flex-shrink-0 max-sm:min-h-[30vh] max-sm:w-[90vw] w-[30vw] flex flex-col items-center justify-center shadow-lg overflow-auto max-sm:overflow-hidden rounded-xl relative">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        width={30}
        height={30}
        src={image}
        alt="card-image"
      />
      <div
        className="content text-white absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-end rounded-xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7))",
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
