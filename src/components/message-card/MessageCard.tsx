import { useNavigate } from "react-router-dom";

const MessageCard = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-md rounded-xl overflow-hidden border border-gray-300">
      <div className="h-[250px] overflow-hidden">
        <img
          src="/images/card-img.jpg"
          alt=""
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition ease-in-out duration-1000"
          onClick={() => navigate("id")}
        />
      </div>
      <div className="p-4 space-y-6">
        <article>
          <h2 className="text-xl font-bold capitalize">Eyes to see</h2>
          <p className="font-medium text-black/80">
            It's deeper than you think
          </p>
        </article>
        <article>
          <p className="font-medium text-black">Parish Pastor - Bible Study</p>
          <p className="font-medium text-black">August 2025</p>
        </article>
      </div>
    </div>
  );
};

export default MessageCard;
