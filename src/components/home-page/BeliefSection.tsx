import type { ValueSection } from "../../lib/types/home";
import BeliefCard from "../beliefs/BeliefCard";

const BeliefSection = ({ data }: { data: ValueSection }) => {

  return (
    <section className="container mx-auto mt-20 px-4">
      <div className="grid md:grid-cols-3 gap-4">
        {data.values?.map((value, idx) => (
          <BeliefCard
            icon={idx === 0 ? `Vector.png` : `Vector-${idx}.png`}
            title={value.heading ?? ""}
            content={value.text ?? ""}
          />
        ))}
      </div>
    </section>
  );
};

export default BeliefSection;
