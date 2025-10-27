import type { ProgramsSection } from "../../lib/types/home";
import ServiceCard from "../service-card/ServiceCard";

const ProgramSection = ({ data }: { data: ProgramsSection }) => {
  return (
    <section className="sec-four">
      <h2 className="tw">{data.title}</h2>
      <h1 className="eg max-w-lg mx-auto text-center mb-12">{data.heading}</h1>

      <div className="cards-container mx-auto">
        {data.programs &&
          data.programs.map((program) => (
            <ServiceCard
              key={program._key}
              serviceName={program.programTitle || ""}
              time={program.details || []}
            />
          ))}
      </div>
    </section>
  );
};

export default ProgramSection;
