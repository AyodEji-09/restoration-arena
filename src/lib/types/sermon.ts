import type { BlockContent, CTA, SanityImage } from "./home";

export interface SermonCategory {
    title: string;
    slug: string;
}

export interface Preacher {
    name: string;
    title?: string;
    image?: string;
}

export interface Sermon {
    _id: string;
    title: string;
    slug: string;
    date: string;
    excerpt?: string;
    coverImage?: SanityImage;
    thumbnail?: SanityImage;
    preacher?: Preacher;
    category?: SermonCategory;
    media?: {
        videoUrl?: string;
        audioFile?: string;
    };
    content?: BlockContent[];
    relatedSermons?: SermonPreview[];
}

// ✅ Lighter version for cards, previews, etc.
export interface SermonPreview {
    title: string;
    slug: string;
    date?: Date;
    excerpt?: string;
    thumbnail?: string;
    preacher?: Preacher;
    category?: SermonCategory;
}

// ✅ Sermons page metadata document
export interface SermonsPage {
    title: string;
    introText?: string;
    hero?: {
        heading?: string;
        title?: string;
        subtext?: string;
        images?: SanityImage[];
        cta?: CTA;
    };
    featuredSermon?: SermonPreview;

}

// lib/types/singleSermon.ts

export interface SingleSermon extends Sermon {
    content: BlockContent[];
    media?: {
        videoUrl?: string;
        audioFile?: string;
    };
    relatedSermons?: SermonPreview[];
}

