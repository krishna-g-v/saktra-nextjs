import { Card } from "./Card";
import { Carousel } from "./Carousel";

export const Section6 = () => {
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#bbf2ff] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-30 pl-25 flex-col">
        <div className="container text-5xl text-white flex-col gap-35 items-start">
          <div className="flex gap-35">
            <div className="services text-[16px] text-[#28001E] min-w-fit uppercase">
              Insights
            </div>
            <div className="gradient flex flex-col">
              <h1 className="gradient2 text-transparent bg-clip-text">
                Lorem ipsum dolor sit.
              </h1>
              <h1 className="gradient2 text-transparent bg-clip-text pb-2">
                consectetur adipisicing elit
              </h1>
            </div>
          </div>
          <div>
            <Carousel hoverColor="white" data={[1, 2, 3, 4, 5, 6]} />
          </div>
        </div>
      </div>
    </div>
  );
};
