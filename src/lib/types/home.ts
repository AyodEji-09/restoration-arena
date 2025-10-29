// Generic block content type
export interface BlockContent {
  _type: "block";
  _key: string;
  style?: string;
  children?: {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }[];
  markDefs?: {
    _key: string;
    _type: string;
    href?: string;
  }[];
}

// CTA (call-to-action) link type
export interface CTA {
  ctaText?: string;
  ctaLink?: string;
  label: string;
  link: string;
}

// ----------------------------------
// 🏠 Home Page
// ----------------------------------

export interface HomePage {
  _type: 'homePage';
  title: string;
  sections: HomePageSection[];
}

// Union type of all possible section types
export type HomePageSection =
  | HeroSectionType
  | WelcomeSectionType
  | ValueSectionType
  | WhoWeAreSectionType
  | ProgramsSectionType
  | ContactSectionType;

// ----------------------------------
// HERO SECTION
// ----------------------------------
export interface HeroSectionType extends CTA {
  _key: string;
  _type: 'heroSection';
  heading?: string;
  title?: string;
  subtext?: string;
  images?: SanityImage[];
  cta: CTA;
}

// ----------------------------------
// WELCOME SECTION
// ----------------------------------
export interface WelcomeSectionType {
  _key: string;
  _type: 'welcomeSection';
  title?: string;
  subtext?: string;
  images?: SanityImage[];
  heading?: string;
  message?: BlockContent[];
  pastorName?: Pastor;
}

// ----------------------------------
// VALUE SECTION
// ----------------------------------
export interface ValueSectionType {
  _key: string;
  _type: 'valueSection';
  title?: string;
  values?: ValueCard[];
}

export interface ValueCard {
  icon?: SanityImage;
  color?: string;
  heading?: string;
  text?: string;
}

// ----------------------------------
// WHO WE ARE SECTION
// ----------------------------------
export interface WhoWeAreSectionType extends CTA {
  _key: string;
  _type: 'whoWeAreSection';
  title?: string;
  heading?: string;
  message?: BlockContent[];
  image?: SanityImage;
  cta: CTA;
}

// ----------------------------------
// PROGRAMS SECTION
// ----------------------------------
export interface ProgramsSectionType {
  _key: string;
  _type: 'programsSection';
  title?: string;
  heading?: string;
  programs?: ProgramCard[];
}

export interface ProgramCard {
  _key: string;
  icon?: SanityImage;
  programTitle?: string;
  details?: string[];
}

// ----------------------------------
// CONTACT SECTION
// ----------------------------------
export interface ContactSectionType {
  _key: string;
  _type: 'contactSection';
  heading?: string;
  contacts?: ContactInfo[];
  image?: SanityImage;
}

export interface ContactInfo {
  icon?: SanityImage;
  title?: string;
  description?: string;
}

// ----------------------------------
// REUSABLE OBJECTS
// ----------------------------------
export interface Pastor {
  name?: string;
  title?: string;
  image?: SanityImage;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
    url: string
  };
}
