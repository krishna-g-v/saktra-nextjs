import { Card } from "./Card";
import { Carousel } from "./Carousel";
import { SectionData } from "./NavLinks";
import s6Image1 from "../../public/images/s61.png";
import s6Image2 from "../../public/images/s62.png";
import s6Image3 from "../../public/images/s63.jpg";

const Section6Data: SectionData[] = [
  {
    header: "How AI Powers Digital Transformation Across Industries",
    cardContent:
      "Discover how Artificial intelligence is reshaping industries – driving efficiency and superior customer experiences across diverse sectors.",
    imgLink: s6Image1,
  },
  {
    header: "4 Talent Acquisition Strategies for a Future-Proof Workforce",
    cardContent:
      "Find everything you need to know about talent acquisition – why it is important, how to build a powerful talent acquisition strategy, and why partnering with experts matter.",
    imgLink: s6Image2,
  },
  {
    header: "Card Header",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugiat odio incidunt sunt unde voluptatum provident recusandae mollitia officia ratione. Repellendus vitae doloremque, nobis eum nam molestiae et error aliquid.",
    imgLink: s6Image3,
  },
  {
    header: "Card Header",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugiat odio incidunt sunt unde voluptatum provident recusandae mollitia officia ratione. Repellendus vitae doloremque, nobis eum nam molestiae et error aliquid.",
  },
  {
    header: "Card Header",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugiat odio incidunt sunt unde voluptatum provident recusandae mollitia officia ratione. Repellendus vitae doloremque, nobis eum nam molestiae et error aliquid.",
  },
];

export const Section6 = () => {
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#bbf2ff] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-15 pl-25 flex-col">
        <div className="container text-5xl text-white flex-col gap-35 items-start">
          <div className="flex gap-35">
            <div className="services text-[16px] text-[#28001E] min-w-fit uppercase">
              Insights
            </div>
            <div className="gradient flex flex-col">
              <h1 className="gradient2 text-transparent bg-clip-text p-2">
                Expert Insights
              </h1>
              <p className="ml-2 mt-2.5 text-[18px] text-black max-w-2/3 pb-2">
                Unlock the latest trends, thought leadership, and actionable
                strategies in technology, talent, and AI. Our insights help you
                navigate today’s fast-changing digital landscape and make
                smarter, faster business decisions.
              </p>
            </div>
          </div>
          <div>
            <Carousel hoverColor="white" data={Section6Data} />
          </div>
        </div>
      </div>
    </div>
  );
};
