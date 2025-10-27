import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import MessageCard from "../components/message-card/MessageCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { SingleSermon } from "../lib/types/sermon";
import { client } from "../sanity/client";
import { sermonBySlugQuery } from "../sanity/queries/sermonsQuery";
import { BlockContentComponent } from "../components/vlock-content/BlockContent";

const Sermon = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<SingleSermon | null>(null);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const sermon = await client.fetch<SingleSermon>(sermonBySlugQuery, {
        slug,
      });
      setData(sermon);
    })();
  }, [slug]);
  console.log({ data });

  if (!data) return <p>Loading...</p>;
  return (
    <div className="main mt-20">
      <div className="banner py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={data.coverImage?.asset.url}
            alt="message title"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/15"></div>
        <div className="container mx-auto px-4 space-y-8 relative z-10 text-white">
          <article className="space-y-2">
            <h1 className="text-4xl font-bold uppercase">{data.title}</h1>
            <h4 className="text-lg font-semibold uppercase mb-2">Listen Now</h4>
            <p className="text-lg capitalize">{data.excerpt}t</p>
          </article>
          <div className="flex items-center gap-4 max-w-sm">
            <div>
              <button className="bg-white h-20 w-20 rounded-full text-black border-[20px] border-white/65">
                Play
              </button>
            </div>
            {data.media?.audioFile && (
              <div className="w-full">
                <audio controls className="w-full">
                  <source src={data.media.audioFile} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 space-y-16">
        <section className="text-center space-y-2 mb-10">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-gray-600">
            {new Date(data.date).toLocaleDateString()}{" "}
            {data.preacher && `• By ${data.preacher.name}`}
          </p>
          {data.category && (
            <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mt-2">
              {data.category.title}
            </span>
          )}
        </section>

        {data.media?.videoUrl ? (
          <div className="aspect-video mb-10">
            <iframe
              src={data.media.videoUrl}
              className="w-full h-full rounded-2xl"
              allowFullScreen
            ></iframe>
          </div>
        ) : data.media?.audioFile ? (
          <audio controls className="w-full mb-10">
            <source src={data.media.audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : null}

        {/* Content Section */}
        <article className="prose max-w-none mx-auto mb-16">
          <BlockContentComponent value={data.content} />
        </article>

        <article className="text-center">
          <h4 className="text-xl uppercase font-bold text-black/50">
            Share with a friend
          </h4>
          <div className="flex justify-center gap-8 items-center mt-4">
            <button
              className={`bg-tertiary p-2 h-16 w-16 flex justify-center items-center text-3xl text-white rounded-full`}
            >
              <FaFacebookF />
            </button>
            <button
              className={`bg-tertiary p-2 h-16 w-16 flex justify-center items-center text-3xl text-white rounded-full`}
            >
              <FaTwitter />
            </button>
            <button
              className={`bg-tertiary p-2 h-16 w-16 flex justify-center items-center text-3xl text-white rounded-full`}
            >
              <IoIosMail />
            </button>
          </div>
        </article>
        {data.relatedSermons && data.relatedSermons.length > 0 && (
          <div>
            <article className="text-center">
              <h4 className="text-xl uppercase font-bold text-black/50">
                Listen
              </h4>
              <h1 className="text-4xl capitalize font-bold">More sermons</h1>
            </article>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {data.relatedSermons.map((sermon) => (
                <MessageCard key={sermon.slug} data={sermon} />
              ))}
              {/* <MessageCard />
            <MessageCard /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sermon;
