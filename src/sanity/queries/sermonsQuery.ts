export const sermonsPageQuery = `
*[_type == "sermonsPage"][0]{
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
  featuredSermon->{
    title,
    slug,
    excerpt,
    thumbnail{ asset-> },
    date,
    speaker,
    category->{
      title,
      slug
    }
  }
}
`;

// /sanity/queries/sermonsQuery.ts

export const sermonsByCategoryQuery = `
*[_type == "sermon" && category->slug.current == $slug]
  | order(date desc)[$start...$end] {
  _id,
  title,
  "slug": slug.current,
  date,
  excerpt,
  "thumbnail": thumbnail.asset->url,
  preacher->{
    name,
    title,
    "image": image.asset->url
  },
  category->{
    title,
    "slug": slug.current
  }
}
`;

export const allSermonsQuery = `
*[_type == "sermon"]
  | order(date desc)[$start...$end] {
  _id,
  title,
  "slug": slug.current,
  date,
  excerpt,
  "thumbnail": thumbnail.asset->url,
  preacher->{
    name,
    title,
    "image": image.asset->url
  },
  category->{
    title,
    "slug": slug.current
  }
}
`;

// sanity/queries/sermonBySlug.ts
export const sermonBySlugQuery = `
*[_type == "sermon" && slug.current == $slug][0]{
  _id,
  title,
  date,
  excerpt,
  "slug": slug,
  coverImage{ asset->{url}, alt },
  content,
  media {
    videoUrl,
    audioFile {
      asset->{
        url
      }
    }
  },
  preacher->{
    name,
    title,
    image
  },
  category->{
    title,
    "slug": slug.current
  },
  relatedSermons[]->{
    _id,
    title,
    "slug": slug,
    date,
    excerpt,
    coverImage
  }
}
`;

export const sermonCategoriesQuery = `
*[_type == "sermonCategory"]{
  title,
  "slug": slug.current
} | order(title asc)
`;
