import { client } from "../../sanity/client";
import {
  eventsPageQuery,
  upcomingEventsQuery,
  pastEventsQuery,
} from "../../sanity/queries/eventsQuery";
import type { EventItem, EventsPageData } from "../types/events";

export async function fetchEventsPage(): Promise<EventsPageData> {
  return await client.fetch<EventsPageData>(eventsPageQuery);
}

export async function fetchUpcomingEvents(
  start = 0,
  end = 6
): Promise<EventItem[]> {
  return await client.fetch<EventItem[]>(upcomingEventsQuery, { start, end });
}

export async function fetchPastEvents(
  start = 0,
  end = 6
): Promise<EventItem[]> {
  return await client.fetch<EventItem[]>(pastEventsQuery, { start, end });
}
