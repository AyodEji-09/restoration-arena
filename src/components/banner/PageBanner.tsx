import type { HeroSection } from "../../lib/types/home";
import { Link } from "react-router-dom";
import type { MinimalHeroSection } from "../../lib/types/about";

const PageBanner = ({
  data,
  color = "dark",
}: {
  data: HeroSection | MinimalHeroSection;
  color?: "dark" | "light";
}) => {
  return (
    <div
      className={`banner py-32 relative ${
        color === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={data.images && data.images[0]?.asset.url}
          alt="message title"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`container mx-auto px-4 space-y-8 relative z-10 ${
          color === "light" ? "text-white" : "text-black"
        }`}
      >
        <article className="space-y-2">
          {data.title && (
            <h4 className="text-lg font-semibold uppercase mb-2">
              {data.title}
            </h4>
          )}
          <h1 className="text-4xl font-bold uppercase">{data.heading}</h1>
          <p className="text-lg capitalize">{data.subtext}</p>
        </article>
        {data.cta && (
          <Link to={data.cta.link}>
            <button
              className={`h-10 px-12 rounded-full ${
                color === "dark"
                  ? "hover:bg-gray-200 bb"
                  : "hover:bg-gray-100 bg-white text-black"
              } transition`}
            >
              {data.cta.label}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
