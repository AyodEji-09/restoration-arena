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
      <section className="lead-cont mt-20">
        <div className="banner py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/card-img.jpg"
              alt="message title"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/15"></div>
          <div className="container mx-auto px-4 space-y-8 relative z-10 text-white">
            <article className="space-y-2">
              <h1 className="text-4xl font-bold uppercase">Join a Team</h1>
              {/* <h4 className="text-lg font-semibold uppercase mb-2">
                Listen Now
              </h4> */}
              <p className="text-lg capitalize">Learn how you can become part of us</p>
            </article>
          </div>
        </div>
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
