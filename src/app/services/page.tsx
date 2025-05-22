import Image from "next/image";
import BannerImage from "../../../public/images/servicesBanner.jpg";
import { TabBar } from "@/components/TabBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-white absolute top-0 left-0 text-black">
      <div className="banner w-full h-[45vh] relative">
        <Image
          src={BannerImage}
          alt="Services Page Banner"
          fill
          className="object-cover bg-purple-400"
        />
        <div className="bg-[#453e94] opacity-70 absolute top-0 left-0 w-full h-full"></div>
        <div className="bannerContent absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
          <h1 className="text-6xl font-extrabold text-white">Our Services</h1>
          <h3 className="text-3xl font-medium text-white mt-5">
            Comprehensive IT solutions tailored to meet the unique challenges of
            your business
          </h3>
        </div>
      </div>
      <div className="content mt-16 w-full flex justify-center">
        <TabBar />
      </div>
      <Footer />
    </div>
  );
}
