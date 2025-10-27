import type { HeroSection, SanityImage } from "./home";

export type EventItem = {
    _id: string;
    title: string;
    date: Date;
    location: string;
    excerpt: string;
    slug: string;
    image?: SanityImage;
};

export type EventsPageData = {
    title: string;
    introText?: string;
    hero: HeroSection;
    featuredEvent?: EventItem;
    tabConfig?: {
        upcomingLabel?: string;
        pastLabel?: string;
    };
};