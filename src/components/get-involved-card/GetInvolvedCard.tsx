import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  btnText: string;
  url: string;
  image?: string;
};

const GetInvolvedCard = ({ title, btnText, url, image }: Props) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(url);
  };
  return (
    <div className="h-[400px] p-4 rounded-4xl bg-black relative text-white w-full overflow-hidden shadow-md">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image || "/images/image 13.png"}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="h-16">
          <button
            className="bg-white text-black h-10 rounded-full px-8 text-lg font-medium"
            onClick={goTo}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedCard;
