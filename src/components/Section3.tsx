import Image from "next/image";
import bgImage from "../../public/images/image-3.png";
import { Carousel } from "./Carousel";

export const Section3 = () => {
  return (
    <div className="section3 h-[100vh] w-full relative bg-white overflow-hidden">
      <div className="h-[70vh] overflow-hidden relative">
        <Image
          src={bgImage}
          alt="background"
          fill
          className="h-[100%] object-cover"
        />
      </div>
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-25 pl-25 flex flex-col">
        <div className="container text-5xl text-white flex gap-30 items-start">
          <div className="services text-[16px] text-[#BBF2FF]">Services</div>
          <div className="gradient flex flex-col">
            <h1 className="gradient text-transparent bg-clip-text">
              Lorem ipsum dolor sit.
            </h1>
            <h1 className="gradient text-transparent bg-clip-text">
              consectetur adipisicing elit
            </h1>
          </div>
        </div>
        <Carousel data={[1, 2, 3, 4]} />
      </div>
    </div>
  );
};
