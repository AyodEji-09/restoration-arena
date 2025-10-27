import { useEffect, useState } from "react";
import type { AboutPage } from "../lib/types/about";
import { aboutPageQuery } from "../sanity/queries/about";
import { client } from "../sanity/client";
import PageBanner from "../components/banner/PageBanner";
import WhoAreWeSection from "../components/about-page/WhoAreWeSection";
import MinistersSection from "../components/about-page/MinistersSection";

const About = () => {
  const [data, setData] = useState<AboutPage | null>(null);

  useEffect(() => {
    (async () => {
      const result = await client.fetch<AboutPage>(aboutPageQuery);
      setData(result);
    })();
  }, []);

  if (!data) return <p>Loading...</p>;
  return (
    <main>
      {/* <section className="ab-sec-one">
        <h2>WELCOME TO RCCG RESTORATION ARENA, STAMFORD</h2>
        <h1>KNOW MORE ABOUT US</h1>
      </section> */}
      {data.sections[0]._type === "heroSection" && (
        <PageBanner data={data.sections[0]} />
      )}
      {data.sections[1]._type === "whoWeAreSection" && (
        <WhoAreWeSection data={data.sections[1]} />
      )}
      {data.sections[3]._type === "ministersSection" && (
        <MinistersSection data={data.sections[3]} />
      )}
    </main>
  );
};

export default About;
