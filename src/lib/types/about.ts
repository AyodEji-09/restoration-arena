import type { BlockContent, CTA, SanityImage } from "./home";

export interface MinimalHeroSection {
    _type: "heroSection";
    title: string;
    heading: string;
    subtext: string;
    images?: SanityImage[];
    cta?: CTA;
}

export interface AboutWhoWeAreSection {
    _key: string;
    _type: "whoWeAreSection";
    title: string;
    heading: string;
    message?: BlockContent[];
    image?: SanityImage;
    cta?: CTA;
}

export interface AboutValueSection {
    _type: "valueSection";
    title: string;
    values: {
        icon?: SanityImage;
        color?: string;
        heading: string;
        text: string;
    }[];
}

export interface Minister {
    name: string;
    title: string;
    image?: SanityImage;
    message?: BlockContent[];
}

export interface MinistersSectionType {
    _type: "ministersSection";
    title: string;
    ministers: Minister[];
}

export interface AboutPage {
    title: string;
    sections: (
        | MinimalHeroSection
        | AboutWhoWeAreSection
        | AboutValueSection
        | MinistersSectionType
    )[];
}
