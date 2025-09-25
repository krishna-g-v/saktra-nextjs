"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "./Button";
import { cleanHTMLContent } from "@/app/utils/utility";

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
        <Button bgColor="transparent" text="GET STARTED" link="/contact" />
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
