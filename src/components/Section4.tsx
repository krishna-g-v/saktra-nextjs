import { Button } from "./Button";
import { Card } from "./Card";
import { SectionData } from "./NavLinks";
import { poppins } from "@/app/layout";

const Section4Data: SectionData[] = [
  {
    header: "Global Reach, Cross-Functional Expertise",
    cardContent:
      "Our teams blend strategy, engineering, and design to deliver end-to-end value to global enterprises.",
  },
  {
    header: "Scalable Solutions, Tech-Forward Approach",
    cardContent:
      "Whether you're launching a new platform or modernizing legacy systems, we bring the people and technology, at scale, to turn bold ideas into real results.",
  },
  {
    header: "Client-Centric Approach, Future-Ready Thinking",
    cardContent:
      "We partner with you at every step, solving today’s problems with tomorrow in mind. Our agile, adaptive approach moves your business forward",
  },
];

export const Section4 = () => {
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#F5F5F5] overflow-hidden card">
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-12 pl-25 flex-col">
        <div className="container text-5xl text-white flex gap-20 items-start">
          <div className="services text-[16px] text-[#28001E] w-[150px] uppercase gilroy-bold">
            About Us
          </div>
          <div className="gradient flex flex-col gilmer-regular">
            <h1 className="gradient2 text-transparent bg-clip-text p-2">
              Shaping the Future of Business,
            </h1>
            <h1 className="gradient2 text-transparent bg-clip-text pb-2">
              Together
            </h1>
            <div className="mt-5">
              <p
                className={`text-[18px] text-black max-w-2/3 ${poppins.className}`}
              >
                We’re a global technology and talent solutions company enabling
                digital disruption across today’s most dynamic industries. From
                FinTech to Telecom, we empower businesses to scale smarter,
                innovate faster, and lead with confidence
              </p>
            </div>
            <div className="mt-3">
              <p className="text-[18px] text-black max-w-2/3">
                Our tech-enabled, AI-powered solutions help forward-thinking
                businesses solve complex challenges through scalable talent,
                intelligent automation, and future-ready tech strategies.
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <Button text="Read More" bgColor="#BBF2FF" />
              <Button text="Our Solutions" bgColor="#F5F5F5" border={true} />
            </div>
            <div className="flex gap-3 mt-7 mb-10">
              {Section4Data.map((s, i) => {
                return (
                  <Card
                    cardType="card1"
                    key={i}
                    cardContent={s.cardContent}
                    cardHeader={s.header}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
