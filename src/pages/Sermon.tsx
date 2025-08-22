import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import MessageCard from "../components/message-card/MessageCard";

const Sermon = () => {
  return (
    <div className="main mt-20">
      <div className="banner py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/card-img.jpg"
            alt="message title"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/15"></div>
        <div className="container mx-auto px-4 space-y-8 relative z-10 text-white">
          <article className="space-y-2">
            <h1 className="text-4xl font-bold uppercase">Unshakeable</h1>
            <h4 className="text-lg font-semibold uppercase mb-2">Listen Now</h4>
            <p className="text-lg capitalize">Beyond a reasonable Doubt</p>
          </article>
          <button className="bg-white h-20 w-20 rounded-full text-black border-[20px] border-white/65">
            Play
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 space-y-16">
        <article className="text-center">
          <h4 className="text-xl uppercase font-bold text-black/50">
            More Information
          </h4>
          <h1 className="text-4xl capitalize font-bold">About this Sermon</h1>
          <p className="max-w-xl mx-auto mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            doloribus esse eum aspernatur fuga numquam ex dolore non corrupti
            alias.
          </p>
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
        <div>
          <article className="text-center">
            <h4 className="text-xl uppercase font-bold text-black/50">
              Listen
            </h4>
            <h1 className="text-4xl capitalize font-bold">More sermons</h1>
          </article>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermon;
