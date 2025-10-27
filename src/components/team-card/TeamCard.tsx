import type { Minister } from "../../lib/types/about";

const TeamCard = ({ item }: { item: Minister }) => {
  return (
    <div className="w-full">
      <div className="h-[450px] rounded-2xl overflow-hidden">
        <img
          src={item.image?.asset.url}
          alt="lead"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="lead-title">{item.name}</h2>
      <p className="lead-role">{item.title}</p>
    </div>
  );
};

export default TeamCard;
