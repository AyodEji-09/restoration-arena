"react-helmet";

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import { joinTeamPageQuery } from "../sanity/queries/joinTeamPage";
import type { SanityImage } from "../lib/types/home";

type Department = {
  title?: string;
  image?: SanityImage;
  description?: string;
};

type JoinTeamPageData = {
  heroImage?: SanityImage;
  headline?: string;
  subtext?: string;
  departments?: Department[];
};

const JoinTeam = () => {
  const [data, setData] = useState<JoinTeamPageData | null>(null);

  useEffect(() => {
    client.fetch(joinTeamPageQuery).then(setData);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Join a Team | Restoration Arena</title>
        <meta
          name="description"
          content="Discover opportunities to serve at Restoration Arena. Explore our departments and find your place to make a difference."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center">
        {data?.heroImage?.asset ? (
          <img
            src={data.heroImage.asset.url}
            alt={"Join a Team Hero"}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Loading image...</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            {data?.headline || "Join a Team"}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {data?.subtext ||
              "Be part of something bigger—serve, connect, and grow with us by joining one of our vibrant ministries or teams!"}
          </p>
        </div>
      </section>

      {/* Departments/Units Card List */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Departments & Units
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.departments && data.departments.length > 0 ? (
            data.departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                {dept.image?.asset ? (
                  <img
                    src={dept.image.asset.url}
                    alt={""}
                    className="h-48 w-full object-cover object-top"
                  />
                ) : (
                  <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-2">{dept.title}</h3>
                  <p className="text-gray-700 mb-4">{dept.description}</p>
                  {/* <button className="mt-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                    Learn More
                  </button> */}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No departments found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JoinTeam;
