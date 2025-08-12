import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";
import { Section6 } from "@/components/Section6";

export function cleanHTMLContent(html: string | undefined) {
  if (html === undefined) {
    return html;
  }

  return (
    html
      // Remove <a> tags and their contents
      .replace(/<[^>]+>/g, "")
      .replace(/<a\b[^>]*>.*?<\/a>/gi, "")
      // Remove &nbsp;
      .replace(/&nbsp;/g, " ")
      // Remove <p> and </p> tags but keep inner text
      .replace(/<\/?p[^>]*>/gi, "")
      // Remove <span> and </span> tags but keep inner text
      .replace(/<\/?span[^>]*>/gi, "")
      // Collapse multiple spaces
      .replace(/\s+/g, " ")
      .trim()
  );
}

export async function getData(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData(
    "http://157.173.218.78:8080/wp-json/wl/v1/home-page"
  );
  console.log(data);
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
