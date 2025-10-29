import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import { inviteSomeonePageQuery } from "../sanity/queries/inviteSomeonePage";
import { BlockContentComponent } from "../components/vlock-content/BlockContent";
import type { BlockContent, SanityImage } from "../lib/types/home";

type InviteSomeonePageData = {
  heroImage?: SanityImage;
  welcomeText?: string;
  description?: string;
  testimonial?: BlockContent[];
  tips?: string[];
};

const InviteSomeone = () => {
  const [data, setData] = useState<InviteSomeonePageData | null>(null);

  useEffect(() => {
    client.fetch(inviteSomeonePageQuery).then(setData);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Invite Someone | Restoration Arena</title>
        <meta
          name="description"
          content="Invite someone to Restoration Arena and help them discover a welcoming community, faith, and friendship. Share the joy of belonging and growing together."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center">
        {data?.heroImage?.asset?.url ? (
          <img
            src={data.heroImage.asset.url}
            alt={"Invite Someone Hero"}
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
            {"Invite Someone"}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {
              "Share the joy of faith and community—invite a friend, family member, or colleague to Restoration Arena!"
            }
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 space-y-10">
        {/* Description */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">
            {data?.welcomeText || "Why Invite Someone?"}
          </h2>
          <p className="text-base md:text-lg">{data?.description}</p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow transition"
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.origin}/get-involved/invite-someone`,
              );
              alert("Invite link copied to clipboard!");
            }}
          >
            Copy Invite Link
          </button>
          <span className="text-gray-600 text-sm">
            Share this link with someone you care about!
          </span>
        </div>

        {/* Testimonial / Quote */}
        {data?.testimonial && data.testimonial.length > 0 && (
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto shadow text-center">
            <BlockContentComponent value={data.testimonial} />
          </div>
        )}

        {/* Tips / FAQ */}
        {data?.tips && data.tips.length > 0 && (
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold">Tips for Inviting Someone</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {data.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default InviteSomeone;
