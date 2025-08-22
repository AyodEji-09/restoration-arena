import type { LeadershipType } from "../../leadership";

const TeamCard = ({ item }: { item: LeadershipType }) => {
  return (
    <div className="lead">
      <img src={item.image} alt="lead" className="lead-img" />
      <h2 className="lead-title">{item.name}</h2>
      <p className="lead-role">{item.role}</p>
    </div>
  );
};

export default TeamCard;
