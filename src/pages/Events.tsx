import { useNavigate } from "react-router-dom";
import EventsCard from "../components/events-card/EventsCard";
import AppTab, { type TabType } from "../components/tab/AppTab";
import { useEffect, useState } from "react";
import type { EventItem, EventsPageData } from "../lib/types/events";
import {
  fetchEventsPage,
  fetchPastEvents,
  fetchUpcomingEvents,
} from "../lib/api/eventsApi";

const Events = () => {
  const [pageData, setPageData] = useState<EventsPageData | null>(null);
  console.log({ pageData });

  useEffect(() => {
    (async () => {
      const data = await fetchEventsPage();
      setPageData(data);
    })();
  }, []);

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
              src={pageData?.hero.images?.[0]?.asset?.url}
              alt="message title"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/15"></div>
          <div className="container mx-auto px-4 space-y-8 relative z-10 text-white">
            <article className="space-y-2">
              <h1 className="text-4xl font-bold uppercase">
                {pageData?.hero.heading}
              </h1>
              {/* <h4 className="text-lg font-semibold uppercase mb-2">
                Listen Now
              </h4> */}
              <p className="text-lg capitalize">{pageData?.hero.subtext}</p>
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
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 6;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetchUpcomingEvents(page * limit, (page + 1) * limit);
      setEvents(data);
      setLoading(false);
    })();
  }, [page]);

  if (loading) return <p className="text-center">Loading upcoming events...</p>;

  return (
    <div className="p-4 space-y-8">
      <article>
        <p className="text-lg">
          Mark your calendars for these great events coming up.
        </p>
      </article>
      <div className="grid md:grid-cols-3 gap-4">
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No upcoming events found.</p>
        ) : (
          events.map((event) => (
            <EventsCard
              key={event._id}
              title={event.title}
              image={event.image?.asset?.url || ""}
              date={event.date}
              location={event.location}
              excerpt={event.excerpt}
              upcoming
            />
          ))
        )}
      </div>
      {/* Pagination */}
      <PaginationControls
        page={page}
        setPage={setPage}
        disableNext={events.length < limit}
      />
    </div>
  );
};

const PastEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 6;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetchPastEvents(page * limit, (page + 1) * limit);
      setEvents(data);
      setLoading(false);
    })();
  }, [page]);

  const viewEvent = (slug: string) => navigate(`/events/${slug}`);

  if (loading) return <p className="text-center">Loading past events...</p>;
  return (
    <div className="p-4 space-y-8">
      <article>
        <p className="text-lg">Our past events</p>
      </article>
      <div className="grid md:grid-cols-3 gap-4">
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No past events found.</p>
        ) : (
          events.map((event) => (
            <EventsCard
              key={event._id}
              title={event.title}
              image={event.image?.asset.url || ""}
              date={event.date}
              location={event.location}
              excerpt={event.excerpt}
              onClick={() => viewEvent(event.slug)}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <PaginationControls
        page={page}
        setPage={setPage}
        disableNext={events.length < limit}
      />
    </div>
  );
};

// =========================
// REUSABLE PAGINATION
// =========================
interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  disableNext?: boolean;
}

const PaginationControls = ({
  page,
  setPage,
  disableNext,
}: PaginationProps) => (
  <div className="flex justify-center gap-4 mt-8">
    <button
      onClick={() => setPage((p) => Math.max(p - 1, 0))}
      disabled={page === 0}
      className="px-4 py-2 border rounded disabled:opacity-50"
    >
      Previous
    </button>
    <button
      onClick={() => setPage((p) => p + 1)}
      disabled={disableNext}
      className="px-4 py-2 border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
);
