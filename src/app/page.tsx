import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";
import { Section6 } from "@/components/Section6";

import { cleanHTMLContent } from "./utils/utility";

import { getData } from "./utils/utility";

export default async function Home() {
  const data = await getData(
    "http://75.119.142.187:8081/wp-json/wl/v1/home-page"
  );
  return (
    <div>
      <HeroSection />
      <Section2 header={data["services_section"].heading} />
      <Section3 header={data["industries_section"].heading} />
      <Section4
        header={data["about_section"].heading}
        description={
          cleanHTMLContent(
            data["about_section"].description as string
          ) as string
        }
        items={data["about_section"].boxed_items}
      />
      <Section5
        header={data["use_cases_section"].heading}
        description={data["use_cases_section"].description}
      />
      <Section6
        header={data["insight_section"].heading}
        description={data["insight_section"].description}
      />
      <Footer />
    </div>
  );
}
