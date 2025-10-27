export const eventsPageQuery = `
*[_type == "eventsPage"][0]{
  title,
  introText,
  hero{
    heading,
    title,
    subtext,
    ctaText,
    ctaLink,
    cta,
    images[]{ asset-> }
  },
  featuredEvent->{
    _id,
    title,
    date,
    location,
    excerpt,
    "slug": slug.current,
    "image": coverImage.asset->url
  },
  tabConfig
}
`;

export const upcomingEventsQuery = `
*[_type == "event" && date >= now()] | order(date asc) [$start...$end] {
  _id,
  title,
  date,
  location,
  excerpt,
  "slug": slug.current,
  "image": coverImage.asset->url
}
`;

export const pastEventsQuery = `
*[_type == "event" && date < now()] | order(date desc) [$start...$end] {
  _id,
  title,
  date,
  location,
  excerpt,
  "slug": slug.current,
  "image": coverImage.asset->url
}
`;

