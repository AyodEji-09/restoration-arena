import type { AboutWhoWeAreSection } from "../../lib/types/about";
import type { WhoWeAreSection } from "../../lib/types/home";
import { BlockContentComponent } from "../vlock-content/BlockContent";

const WhoAreWeSection = ({
  data,
}: {
  data: WhoWeAreSection | AboutWhoWeAreSection;
}) => {
  return (
    <section className="ab-sec-two mt-12">
      <div className="abhp">
        <h1 className="abh">{data.heading}</h1>
        <div className="abp mx-auto">
          <BlockContentComponent value={data.message || []} />
        </div>
      </div>
      {/* <div className="ab-div-one flex flex-wrap gap-4 mt-20">
        <div className="ab-div-div gap-4 ab1">
          <p className="ab-div-p bl">1</p>
          <div className="ab-div-hp">
            <h1>Our Vision</h1>
            <p>
              Perfecting the saints for service -<br /> Ephesians 4:12
            </p>
          </div>
        </div>
        <div className="ab-div-div ab2">
          <p className="ab-div-p yl">2</p>
          <div className="ab-div-hp">
            <h1>Our Mission</h1>
            <p>
              Building a community of heaven
              <br />
              -conscious and complete believers
              <br /> through sincere love and worship of God <br />
              and service to mankind.
            </p>
          </div>
        </div>
        <div className="ab-div-div ab3">
          <p className="ab-div-p ol">3</p>
          <div className="ab-div-hp">
            <h1>Our Beliefs</h1>
            <p>
              Our beliefs align with the <br />
              Redeemed Christian Church of
              <br /> God (RCCG) mandate...
            </p>
          </div>
        </div>
      </div>
      <div className="ab-div-cont">
        <h1>ONE VISION</h1>
        <p>
          Israel became united at the city of <br />
          David. David reigned in Hebron <br />
          over the house of Judah for seven <br />
          and half years. However, he
          <br /> became king over the entire
          <br /> nation at the point when all the <br />
          tribes of Israel decided to come
          <br /> together under one banner
          <br /> “Indeed we are your bone and
          <br /> your flesh” 2 Sam. 5:1. At the City <br />
          of David, people of the land cast <br />
          aside individual differences and <br />
          selfish interests for a common
          <br /> benefit thereby acknowledging
          <br /> the fact that they share a<br /> common origin Isa. 41:8
        </p>
      </div>
      <div className="ab-div-cont">
        <h1>GLORIOUS</h1>
        <p>
          David became king at the age of
          <br /> thirty and he reigned for forty
          <br /> years in the City of David. The
          <br /> better parts of his years were
          <br /> spent as king. He had a rough
          <br /> humble beginning but he ended <br />
          his life in glory. “Then, even if
          <br /> your beginnings were modest,
          <br /> your final days will be full of
          <br /> prosperity.” Job 8: 7 (HCSB)
        </p>
      </div>
      <div className="ab-div-cont">
        <h1>ASSURED VICTORY</h1>
        <p>
          David possessed the gates of his
          <br /> enemies despite much opposition <br />
          (2 Sam. 5:6-7). David won all the
          <br /> battles he engaged in because
          <br /> God got his back (Psalm 20:6)
        </p>
      </div>
      <div className="ab-div-cont">
        <h1>EXPANSION INCREASE</h1>
        <p>
          David built inwards and outwards
          <br /> from Mount Zion (2 Sam. 5:9-12).
          <br /> His kingdom was established and
          <br /> he became great; the greatest
          <br /> king in Israel.
        </p>
      </div>
      <div className="ab-div-cont">
        <h1>
          BUILDING MIGHTY
          <br /> PEOPLE
        </h1>
        <p>
          God raised up mighty men to help
          <br /> David build Jerusalem (1 Chr. 11:
          <br /> 6). The same people that were <br />
          distressed, in debt and of no
          <br /> relevance (1 Sam. 22:1-2) ended
          <br /> up being mighty men in the city of
          <br /> David. This is the mandate we <br />
          believe God has committed to our <br />
          hands and with Him on our side <br />
          we shall deliver.
        </p>
      </div> */}
    </section>
  );
};

export default WhoAreWeSection;
