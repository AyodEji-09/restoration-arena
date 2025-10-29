import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import { joinFellowshipCenterPageQuery } from "../sanity/queries/joinFellowshipCenterPage";
import type { SanityImage } from "../lib/types/home";

type FellowshipCenter = {
  name?: string;
  address?: string;
  meetingTime?: string;
  contactName?: string;
  contactPhone?: string;
  image?: SanityImage;
};

type FAQ = {
  question?: string;
  answer?: string;
};

type JoinFellowshipCenterPageData = {
  heroImage?: SanityImage;
  headline?: string;
  subtext?: string;
  fellowshipCenters?: FellowshipCenter[];
  faqs?: FAQ[];
};

const JoinFellowshipCenter = () => {
  const [data, setData] = useState<JoinFellowshipCenterPageData | null>(null);
  console.log({ data });

  useEffect(() => {
    client.fetch(joinFellowshipCenterPageQuery).then(setData);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Join Fellowship Center | Restoration Arena</title>
        <meta
          name="description"
          content="Find and join a Fellowship Center near you. Connect, grow, and belong in a vibrant community at Restoration Arena."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center">
        {data?.heroImage?.asset?.url ? (
          <img
            src={data.heroImage.asset.url}
            alt={"Join Fellowship Center Hero"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Loading image...</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            {data?.headline || "Join a Fellowship Center"}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {data?.subtext ||
              "Discover a place to belong, connect, and grow in faith. Find a Fellowship Center near you and experience true community!"}
          </p>
        </div>
      </section>

      {/* Fellowship Centers Card List */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Fellowship Centers
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.fellowshipCenters && data.fellowshipCenters.length > 0 ? (
            data.fellowshipCenters.map((center, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-40 w-full">
                  {center.image?.asset?.url ? (
                    <img
                      src={center.image.asset.url}
                      alt={center.name || ""}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 bg-white/80 rounded px-2 py-1 text-xs font-semibold text-gray-800 shadow">
                    {center.meetingTime}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">
                    {center.name}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Address:</span>{" "}
                    {center.address}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Coordinator:</span>{" "}
                    {center.contactName}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Phone:</span>{" "}
                    {center.contactPhone}
                  </p>
                  <button
                    className="mt-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition font-semibold"
                    onClick={() => {
                      if (center.contactPhone) {
                        window.open(
                          `https://wa.me/${center.contactPhone}?text=Hello, I'm interested in joining ${center.name} at Restoration Arena.`,
                          "_blank",
                        );
                      } else {
                        alert(
                          "No valid phone number found for WhatsApp contact.",
                        );
                      }
                    }}
                  >
                    Express Interest
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No fellowship centers found.
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {data?.faqs && data.faqs.length > 0 ? (
            data.faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold mb-2 text-blue-700">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No FAQs found.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JoinFellowshipCenter;
