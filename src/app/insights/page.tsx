import { Footer } from "@/components/Footer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import placeHolderImage from "@/../public/images/s22.jpg";

const getData = async () => {
  const res = await fetch("https://saktra.gmasoftinc.com/wp-json/wl/v1/posts");
  const data = await res.json();
  return data;
};

export default async function Insights() {
  const casesData = await getData();
  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <div className="max-w-[80%] max-sm:max-w-[95%] mx-auto text-center">
        <h1 className="text-6xl text-purple-gradient mt-8 gilroy-regular">
          Expert Insights
        </h1>
        <div className="w-full flex items-center justify-center">
          <p className="gilroy-regular mt-5 max-w-[70%] max-sm:max-w-[95%]">
            Unlock the latest trends, thought leadership, and actionable
            strategies in technology, talent, and AI. Our insights help you
            navigate today’s fast-changing digital landscape and make smarter,
            faster business decisions.
          </p>
        </div>
        <div className="flex gap-10 mt-10 overflow-auto py-5">
          {casesData.map(
            (c: {
              id: string;
              slug: string;
              title: string;
              featured_image: { url: string };
            }) => (
              <InsightsCard
                key={c.id}
                slug={c.slug}
                title={c.title}
                image={
                  c.featured_image === null
                    ? placeHolderImage
                    : c.featured_image?.url
                }
              />
            )
          )}
        </div>
        <div className="w-full flex my-5 justify-end gap-4 items-center">
          <p>Scroll right for more Blogs</p>
          <div className="border border-black p-3 rounded-full">
            <GoArrowRight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const InsightsCard = ({
  title,
  image,
  slug,
}: {
  title: string;
  image: string | StaticImageData;
  slug: string;
}) => {
  return (
    <div className="w-[400px] h-[400px] relative flex-shrink-0">
      <Image
        className="object-cover w-full h-full"
        src={image}
        height={200}
        width={200}
        alt="case-study-banner-image"
      />
      <div
        className="overlay absolute w-full h-full top-0 left-0 z-50 flex text-white"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <h3 className="mt-[100px] ml-[50px]">{title}</h3>
      </div>
      <Link href={`/insights/${slug}`}>
        <div className="absolute bottom-7 right-8 z-[100] flex items-center justify-center rounded-full border border-white p-1 cursor-pointer hover:bg-purple-800">
          <GoArrowUpRight className=" font-extrabold text-white text-[24px]" />
        </div>
      </Link>
    </div>
  );
};
