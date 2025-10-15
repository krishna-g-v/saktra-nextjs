import { cleanHTMLContent } from "@/app/utils/utility";
import { Button } from "./Button";
import { Carousel } from "./Carousel";
import { poppins } from "@/components/NavLinks";

const mapData = (items: any[]) => {
  return items.map((i) => ({
    header: i.title as string,
    cardContent: cleanHTMLContent(i.description) as string,
  }));
};

export const Section4 = ({
  header,
  description,
  items,
}: {
  header: string;
  description: string;
  items: [{ title: string; description: string }];
}) => {
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#F5F5F5] overflow-hidden card">
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-4 max-sm:pt-7 pl-25 max-sm:pl-5 flex-col">
        <div className="container text-5xl max-sm:text-[35px] text-white flex max-sm:gap-10 gap-20 items-start max-sm:flex-col">
          <div className="services text-[16px] text-[#28001E] w-[150px] uppercase gilroy-bold max-sm:ml-2 whitespace-nowrap mt-[15px]">
            About Us
          </div>
          <div className="gradient flex flex-col gilmer-regular">
            <h1 className="gradient2 text-transparent bg-clip-text p-2 max-sm:max-w-[90%]">
              {header}
            </h1>
            <div className="mt-5">
              <p
                className={`text-[18px] max-sm:text-[16px] max-sm:max-w-[90%] text-black md:max-w-[90%] ${poppins.className}`}
              >
                {description}
              </p>
            </div>
            <div className="mt-3">
              <p className="text-[18px] text-black max-w-[90% ] max-sm:text-[16px] max-sm:max-w-[90%]">
                Our tech-enabled, AI-powered solutions help forward-thinking
                businesses solve complex challenges through scalable talent,
                intelligent automation, and future-ready tech strategies.
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <Button text="Read More" bgColor="#BBF2FF" link="/about" />
              <Button
                text="Our Solutions"
                bgColor="#F5F5F5"
                border={true}
                link="/talent"
              />
            </div>
            <Carousel
              enableLink={false}
              section="section4"
              data={mapData(items)}
              cardType="Card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
