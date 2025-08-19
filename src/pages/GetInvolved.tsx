import { Helmet } from "react-helmet";
import GetInvolvedCard from "../components/get-involved-card/GetInvolvedCard";
const GetInvolved = () => {
  return (
    <div>
      <Helmet>
        <title>Get Involved | Restoration Arena</title>
        <meta
          name="description"
          content="Get involved with Restoration Arena and discover opportunities to serve, volunteer, and grow in faith. Join our ministries, connect with the community, and make a meaningful impact today."
        />
      </Helmet>
      <section className="lead-cont mt-12">
        <h1 className="lead-h">Be Part of the Family, Serve with us.</h1>
        <p className="lead-p mx-auto">
          Join hands with us to serve, grow, and make a lasting impact in our
          church. Discover volunteer opportunities, ministries, and ways to
          share your gifts in faith.
        </p>
        <div className="container mx-auto px-4 my-16">
          <div className="grid md:grid-cols-3 gap-4">
            <GetInvolvedCard
              title="Invite Someone"
              btnText="Learn More"
              url=""
            />
            <GetInvolvedCard title="Join a team" btnText="View Teams" url="" />
            <GetInvolvedCard
              title="Join Fellowship center"
              btnText="Learn More"
              url=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
