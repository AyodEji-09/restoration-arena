export const getInvolvedPageQuery = `
*[_type == "getInvolvedPage"][0]{
  heroImage{ asset->{url, alt} },
  heroTitle,
  heroSubtext,
  headline,
  description,
  cards[]{
    title,
    btnText,
    url,
    image{ asset->{url, alt} }
  }
}
`;
