import type { MinistersSection } from "../../lib/types/about";
import TeamCard from "../team-card/TeamCard";

const MinistersSection = ({
  data,
}: {
  data: MinistersSection;
}) => {
  console.log({ data });
  return (
    <section className="container mx-auto px-4">
      <h1 className="lead-h">Ministers</h1>
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my -8">
        {data.ministers.map((leader) => (
          <TeamCard key={leader.title} item={leader} />
        ))}
      </div>
    </section>
  );
};

export default MinistersSection;
