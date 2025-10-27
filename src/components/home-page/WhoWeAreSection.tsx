import { Link } from "react-router-dom";
import type { WhoWeAreSection } from "../../lib/types/home";
import { BlockContentComponent } from "../vlock-content/BlockContent";

const WhoWeAreSection = ({ data }: { data: WhoWeAreSection }) => {
  return (
    <section className="sec-three">
      <div className="sec-three-div-container">
        <p>{data.title}</p>
        <h2>{data.heading}</h2>
        <BlockContentComponent value={data.message} />
        <Link to={`${data.link}`}>
          <button>{data.cta.label}</button>
        </Link>
      </div>
      <img src={data.image?.asset.url} />
    </section>
  );
};

export default WhoWeAreSection;
