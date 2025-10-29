export const joinTeamPageQuery = `
*[_type == "joinTeamPage"][0]{
  heroImage{ asset->{url, alt} },
  headline,
  subtext,
  departments[]{
    title,
    image{ asset->{url, alt} },
    description
  }
}
`;
