import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
    </div>
  );
}
