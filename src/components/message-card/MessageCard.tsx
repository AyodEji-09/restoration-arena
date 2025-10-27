import { useNavigate } from "react-router-dom";
import type { SermonPreview } from "../../lib/types/sermon";

const MessageCard = ({ data }: { data: SermonPreview }) => {
  console.log({ data });

  const navigate = useNavigate();
  return (
    <div className="max-w-md rounded-xl overflow-hidden border border-gray-300">
      <div className="h-[250px] overflow-hidden">
        <img
          src={data.thumbnail}
          alt=""
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition ease-in-out duration-1000"
          onClick={() => navigate(data.slug)}
        />
      </div>
      <div className="p-4 space-y-6">
        <article>
          <h2 className="text-xl font-bold capitalize">{data.title}</h2>
          <p className="font-medium text-black/80">{data.excerpt}</p>
        </article>
        <article>
          <p className="font-medium text-black">
            {data.preacher?.name} - Bible Study
          </p>
          <p>
            {data.date
              ? new Date(data.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Date not available"}
          </p>
        </article>
      </div>
    </div>
  );
};

export default MessageCard;
