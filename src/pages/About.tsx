import TeamCard from "../components/team-card/TeamCard";
import leadership from "../leadership";

const About = () => {
  return (
    <main>
      <section className="ab-sec-one">
        <h2>WELCOME TO RCCG RESTORATION ARENA, STAMFORD</h2>
        <h1>KNOW MORE ABOUT US</h1>
      </section>
      <section className="ab-sec-two mt-12">
        <div className="abhp">
          <h1 className="abh">WHO ARE WE?</h1>
          <p className="abp mx-auto">
            RCCG Restoration Arena believes God has called every follower of
            Jesus to “make disciples among all peoples” (Matthew 28:18). In
            making disciples we are proclaiming His glory among the nations and
            inviting everyone, everywhere to bow their knee to the Lordship of
            Jesus. <br />
            We believe that this kingdom work can only be accomplished through
            God’s strength and through partnership with members of our local
            community. Therefore we partner together with organizations that
            share our commitment to improving the lives of others through
            feeding, donations etc
          </p>
        </div>
        <div className="ab-div-one flex flex-wrap gap-4 mt-20">
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
        {/* <div className="ab-sec-three">
          <h1 className="ab-div-two">
            A VIBRANT COMMUNITY OF BELIEVERS,
            <br />
            COMMITTED TO CHRIST.
          </h1>
          <div className="ab-div-three">
            <div className="ab-div-cont">
              <h1>DOMINION FORTRESS</h1>
              <p>
                As the name implies, City of <br />
                David started on Mount Zion just <br />
                outside the walls of biblical <br />
                Jerusalem. It is the highest point
                <br /> among the hills surrounding <br />
                Jerusalem and it was from there
                <br /> that David started to rule the <br />
                whole Israel. It was a fortress
                <br /> from which King David fought and
                <br /> won many battles. It was
                <br /> practically impregnable Ps. 125: 1
              </p>
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
            </div>
          </div>
        </div> */}
      </section>
      <section className="container mx-auto px-4">
        <h1 className="lead-h">Ministers</h1>
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my -8">
          {leadership.map(leader => (
            <TeamCard key={leader.id} item={leader} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
