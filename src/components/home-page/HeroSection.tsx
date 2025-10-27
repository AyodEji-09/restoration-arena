import { useEffect, useState } from "react";
import type { HeroSection } from "../../lib/types/home";
import { urlFor } from "../../sanity/image";

const HeroSection = ({ data }: { data: HeroSection }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) =>
        data?.images && data.images.length > 0
          ? (prev + 1) % data.images.length
          : 0
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [data.images?.length]);

  return (
    <section className="relative w-full overflow-hidden" id="backgroundDiv">
      <div className="absolute inset-0 bg-black/35 z-10"></div>
      {data.images?.map((img, i) => {
        const imageUrl = img?.asset
          ? urlFor(img)
              .width(1920)
              .height(1080)
              .quality(80)
              .auto("format")
              .url()
          : "";
        return (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-top transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        );
      })}
      <div className="image-container relative z-10 space-y-4">
        <h2 className="text-xl font-semibold">Welcome to Our Church</h2>
        <article>
          <h1 className="font-bold text-5xl lg:text-6xl uppercase">
            Building A <br />
            Family of God
          </h1>
          <p className="text-xl">
            worship with us at RCCG Restoration Arena
            <br />
            Parish, Stamford.
          </p>
        </article>
        <a href="./pages/about.html">
          <button className="mt-8">LEARN MORE</button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
