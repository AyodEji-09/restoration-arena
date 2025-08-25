import type { LeadershipType } from "../../leadership";

const TeamCard = ({ item }: { item: LeadershipType }) => {
  return (
    <div className="w-full">
      <div className="h-[450px] rounded-2xl overflow-hidden">
        <img
          src={item.image}
          alt="lead"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="lead-title">{item.name}</h2>
      <p className="lead-role">{item.role}</p>
    </div>
  );
};

export default TeamCard;
