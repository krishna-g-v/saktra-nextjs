import { Footer } from "@/components/Footer";

type Params = Promise<{
  slug: string;
}>;

const getData = async (slug: string) => {
  const res = await fetch(
    `http://75.119.142.187:8081/wp-json/wl/v1/posts/${slug}`
  );
  const data = await res.json();
  return data;
};

export default async function InsightBlogDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const caseData = await getData(slug);
  return (
    <div className="bg-white pt-20">
      <div className="flex flex-col min-h-[70vh] w-full px-[10%] max-sm:px-[5%] text-center gilroy-regular">
        <h1 className="text-6xl max-sm:text-3xl text-purple-gradient mt-8 gilroy-regular">
          Blog - {slug}
        </h1>
        <p className="text-purple-gradient">
          Authored by - {caseData.author.name}
        </p>
        <p
          className="text-black my-8"
          dangerouslySetInnerHTML={{ __html: caseData.content as string }}
        ></p>
      </div>
      <Footer />
    </div>
  );
}
