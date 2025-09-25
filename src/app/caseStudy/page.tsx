import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const getData = async () => {
  const res = await fetch(
    "https://saktra.gmasoftinc.com/wp-json/wl/v1/posts?category=use-cases"
  );
  const data = await res.json();
  return data;
};

export default async function CaseStudy() {
  const casesData = await getData();
  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <div className="max-w-[80%] max-sm:max-w-[95%] mx-auto text-center">
        <h1 className="text-6xl max-sm:text-3xl text-purple-gradient mt-8 gilroy-regular">
          Real Business,Real Impact
        </h1>
        <div className="w-full flex items-center justify-center">
          <p className="gilroy-regular mt-5 max-w-[70%] max-sm:max-w-[95%]">
            Dive into our case studies to see how we help our clients save time,
            reduce costs, and drive innovation. Learn about the challenges we
            faced, the custom AI solutions we implemented, and the measurable
            results that followed.
          </p>
        </div>
        {casesData.map(
          (c: {
            id: string;
            slug: string;
            title: string;
            featured_image: { url: string };
          }) => (
            <CaseStudyCard
              key={c.id}
              slug={c.slug}
              title={c.title}
              image={c.featured_image.url}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

const CaseStudyCard = ({
  title,
  image,
  slug,
}: {
  title: string;
  image: string;
  slug: string;
}) => {
  return (
    <div className="w-full h-[200px] my-6 relative">
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
      <Link href={`/caseStudy/${slug}`}>
        <div className="absolute bottom-7 right-8 z-[100] flex items-center justify-center rounded-full border border-white p-1 cursor-pointer hover:bg-purple-800">
          <GoArrowUpRight className=" font-extrabold text-white text-[24px]" />
        </div>
      </Link>
    </div>
  );
};
