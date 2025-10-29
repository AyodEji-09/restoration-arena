export const joinFellowshipCenterPageQuery = `
*[_type == "joinFellowshipCenterPage"][0]{
  heroImage{ asset->{url, alt} },
  headline,
  subtext,
  fellowshipCenters[]{
    name,
    address,
    meetingTime,
    contactName,
    contactPhone,
    image{ asset->{url, alt} }
  },
  faqs[]{
    question,
    answer
  }
}
`;
