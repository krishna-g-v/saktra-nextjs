"use client";
import { Card } from "./Card";
import { Navigator } from "./Navigator";

export const Section5 = () => {
  const nextImg = () => {};
  const prevImg = () => {};
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#e8e8e8] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-30 pl-25 flex-col">
        <div className="container text-5xl text-white flex gap-35 items-start">
          <div className="services text-[16px] text-[#28001E] min-w-fit uppercase">
            Use Cases
          </div>
          <div className="gradient flex flex-col">
            <h1 className="gradient2 text-transparent bg-clip-text">
              Lorem ipsum dolor sit.
            </h1>
            <h1 className="gradient2 text-transparent bg-clip-text pb-2">
              consectetur adipisicing elit
            </h1>
            <div className="mt-5 max-w-2/3">
              <p className="text-[18px] text-black max-w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                inventore rem quidem nobis exercitationem quae maiores, nam eum
                omnis iusto?
              </p>
            </div>
            <div className="flex gap-3 mt-15 mb-10">
              {[1, 2, 3].map((_, i) => {
                return (
                  <Card
                    cardType="card2"
                    key={i}
                    cardContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eligendi! Quibusdam maiores odio corrupti nesciunt ipsam assumenda a cupiditate nemo!"
                    cardHeader="Card Header"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Navigator nextImg={nextImg} prevImg={prevImg} />
      </div>
    </div>
  );
};
