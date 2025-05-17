import { Button } from "./Button";
import { Card } from "./Card";

export const Section4 = () => {
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#F5F5F5] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5 pt-12 pl-25 flex-col">
        <div className="container text-5xl text-white flex gap-20 items-start">
          <div className="services text-[16px] text-[#28001E] w-[150px] uppercase">
            About Us
          </div>
          <div className="gradient flex flex-col">
            <h1 className="gradient2 text-transparent bg-clip-text">
              Lorem ipsum dolor sit.
            </h1>
            <h1 className="gradient2 text-transparent bg-clip-text pb-2">
              consectetur adipisicing elit
            </h1>
            <div className="mt-5">
              <p className="text-[18px] text-black max-w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                inventore rem quidem nobis exercitationem quae maiores, nam eum
                omnis iusto?
              </p>
            </div>
            <div className="mt-3">
              <p className="text-[18px] text-black max-w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                inventore rem quidem nobis exercitationem quae maiores, nam eum
                omnis iusto?
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <Button text="Read More" bgColor="#BBF2FF" />
              <Button text="Our Solutions" bgColor="#F5F5F5" border={true} />
            </div>
            <div className="flex gap-3 mt-15 mb-10">
              {[1, 2, 3].map((_, i) => {
                return (
                  <Card
                    cardType="card1"
                    key={i}
                    cardContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eligendi! Quibusdam maiores odio corrupti nesciunt ipsam assumenda a cupiditate nemo!"
                    cardHeader="Card Header"
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
