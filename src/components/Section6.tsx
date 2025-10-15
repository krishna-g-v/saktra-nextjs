import { Carousel } from "./Carousel";
import { SectionData } from "./NavLinks";
import s6Image1 from "../../public/images/s61.png";
import { poppins } from "@/components/NavLinks";

// const Section6Data: SectionData[] = [
//   {
//     header: "How AI Powers Digital Transformation Across Industries",
//     cardContent:
//       "Discover how Artificial intelligence is reshaping industries – driving efficiency and superior customer experiences across diverse sectors.",
//     imgLink: s6Image1,
//   },
//   {
//     header: "4 Talent Acquisition Strategies for a Future-Proof Workforce",
//     cardContent:
//       "Find everything you need to know about talent acquisition – why it is important, how to build a powerful talent acquisition strategy, and why partnering with experts matter.",
//     imgLink: s6Image2,
//   },
//   {
//     header: "Card Header",
//     cardContent:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugiat odio incidunt sunt unde voluptatum provident recusandae mollitia officia ratione. Repellendus vitae doloremque, nobis eum nam molestiae et error aliquid.",
//     imgLink: s6Image3,
//   },
//   {
//     header: "Card Header",
//     cardContent:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugiat odio incidunt sunt unde voluptatum provident recusandae mollitia officia ratione. Repellendus vitae doloremque, nobis eum nam molestiae et error aliquid.",
//   },
//   {
//     header: "Card Header",
//     cardContent:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugiat odio incidunt sunt unde voluptatum provident recusandae mollitia officia ratione. Repellendus vitae doloremque, nobis eum nam molestiae et error aliquid.",
//   },
// ];

const transformData = (data: any[]): SectionData[] => {
  return data.map((item) => ({
    header: item.title,
    cardContent: item.excerpt,
    imgLink: item.featured_image?.url || s6Image1, // Fallback to img1 if no image
    link: `/insights/${item.slug}`,
  }));
};

// fetch industries home section data
const getData = async () => {
  const res = await fetch(
    "https://saktra.gmasoftinc.com/wp-json/wl/v1/posts?category=insights"
  );
  const data = await res.json();
  const section3Data = transformData(data);
  return section3Data;
};

export async function Section6({
  header,
  description,
}: {
  header: string;
  description: string;
}) {
  const Section6Data = await getData();
  return (
    <div className="section3 h-[100vh] w-full relative bg-[#bbf2ff] overflow-hidden">
      <div className="content absolute top-0 left-0 h-full w-full z-5  max-sm:pt-7 pt-15 max-sm:pl-5 pl-25 flex-col">
        <div className="container text-5xl text-white flex-col max-sm:text-[38px] items-start">
          <div className="flex gap-35 max-sm:flex-col max-sm:gap-15">
            <div className="services text-[16px] text-[#28001E] min-w-fit uppercase gilroy-bold  ">
              Insights
            </div>
            <div className="gradient flex flex-col">
              <h1 className="gradient2 text-transparent bg-clip-text p-2 gilmer-regular">
                {header}
              </h1>
              <p
                className={`ml-2 mt-2.5 text-[18px] text-black max-w-2/3 max-sm:max-w-[90%] pb-2 ${poppins.className}`}
              >
                {description}
              </p>
            </div>
          </div>
          <div>
            <Carousel maxCards={2} hoverColor="white" data={Section6Data} />
          </div>
        </div>
      </div>
    </div>
  );
}
