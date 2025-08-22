import { useNavigate } from "react-router-dom";
import EventsCard from "../components/events-card/EventsCard";
import AppTab, { type TabType } from "../components/tab/AppTab";

const Events = () => {
  const tabs: TabType[] = [
    { id: 1, title: "upcoming Events", component: <UpcomingEvents /> },
    { id: 2, title: "Past Events", component: <PastEvents /> },
  ];
  return (
    <div>
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
              <h1 className="text-4xl font-bold uppercase">Our Events</h1>
              {/* <h4 className="text-lg font-semibold uppercase mb-2">
                Listen Now
              </h4> */}
              <p className="text-lg capitalize">
                See our past events and what is coming next
              </p>
            </article>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <AppTab tabs={tabs} />
        </div>
      </section>
    </div>
  );
};

export default Events;

const UpcomingEvents = () => {
  return (
    <div className="p-4 space-y-8">
      <article>
        <p className="text-lg">
          Mark your calendars for these great events coming up.
        </p>
      </article>
      <div className="grid md:grid-cols-3 gap-4">
        <EventsCard upcoming />
        <EventsCard upcoming />
        <EventsCard upcoming />
        <EventsCard upcoming />
        <EventsCard upcoming />
        <EventsCard upcoming />
      </div>
    </div>
  );
};

const PastEvents = () => {
  const navigate = useNavigate();

  const viewEvent = () => navigate("/events/past-event/id");

  return (
    <div className="p-4 space-y-8">
      <article>
        <p className="text-lg">Our past events</p>
      </article>
      <div className="grid md:grid-cols-3 gap-4">
        <EventsCard onClick={viewEvent} />
        <EventsCard onClick={viewEvent} />
        <EventsCard onClick={viewEvent} />
        <EventsCard onClick={viewEvent} />
        <EventsCard onClick={viewEvent} />
        <EventsCard onClick={viewEvent} />
      </div>
    </div>
  );
};
