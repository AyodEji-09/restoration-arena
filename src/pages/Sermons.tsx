import MessageCard from "../components/message-card/MessageCard";

const Sermons = () => {
  return (
    <div className="main mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold py-4">Sermons</h1>
      </div>
      <div className="banner py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/P10445681.png"
            alt="message title"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 space-y-8 relative z-10 text-white">
          <article className="space-y-2">
            <h4 className="text-lg font-semibold uppercase mb-2">
              Latest Message
            </h4>
            <h1 className="text-4xl font-bold uppercase">Unshakeable</h1>
            <p className="text-lg capitalize">Beyond a reasonable Doubt</p>
          </article>
          <button className="bg-white h-10 px-12 rounded-full text-black">
            Watch Now
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <article className="text-center">
          <h4 className="text-xl uppercase font-bold text-black/50">Listen</h4>
          <h1 className="text-4xl capitalize font-bold">Sermons Archive</h1>
        </article>
        <div className="grid grid-cols-3 gap-4 mt-16">
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
    </div>
  );
};

export default Sermons;
