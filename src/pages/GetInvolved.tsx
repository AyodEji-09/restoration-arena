import { Helmet } from "react-helmet";
import GetInvolvedCard from "../components/get-involved-card/GetInvolvedCard";
import { client } from "../sanity/client";
import { getInvolvedPageQuery } from "../sanity/queries/getInvolvedPage";
import { useEffect, useState } from "react";
import type { SanityImage } from "../lib/types/home";

type Card = {
  title: string;
  btnText: string;
  url: string;
  image: SanityImage;
};

type GetInvolvedPageData = {
  heroImage?: SanityImage;
  heroTitle?: string;
  heroSubtext?: string;
  headline?: string;
  description?: string;
  cards?: Card[];
};

const GetInvolved = () => {
  const [data, setData] = useState<GetInvolvedPageData | null>(null);

  useEffect(() => {
    client.fetch(getInvolvedPageQuery).then(setData);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Get Involved | Restoration Arena</title>
        <meta
          name="description"
          content="Get involved with Restoration Arena and discover opportunities to serve, volunteer, and grow in faith. Join our ministries, connect with the community, and make a meaningful impact today."
        />
      </Helmet>
      <section className="lead-cont mt-20">
        <div className="banner py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            {data?.heroImage?.asset ? (
              <img
                src={data.heroImage.asset.url}
                alt={"Get Involved Hero"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Loading image...</span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/15"></div>
          <div className="container mx-auto px-4 space-y-8 relative z-10 text-white">
            <article className="space-y-2">
              <h1 className="text-4xl font-bold uppercase">
                {data?.heroTitle || "Join a Team"}
              </h1>
              <p className="text-lg capitalize">
                {data?.heroSubtext || "Learn how you can become part of us"}
              </p>
            </article>
          </div>
        </div>
        <h1 className="lead-h">
          {data?.headline || "Be Part of the Family, Serve with us."}
        </h1>
        <p className="lead-p mx-auto">
          {data?.description ||
            "Join hands with us to serve, grow, and make a lasting impact in our church. Discover volunteer opportunities, ministries, and ways to share your gifts in faith."}
        </p>
        <div className="container mx-auto px-4 my-16">
          <div className="grid md:grid-cols-3 gap-4">
            {data?.cards &&
              data.cards.length > 0 &&
              data.cards.map((card, idx) => (
                <GetInvolvedCard
                  key={idx}
                  title={card.title}
                  btnText={card.btnText}
                  url={card.url}
                  image={card.image?.asset.url}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
