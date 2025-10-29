export const inviteSomeonePageQuery = `
*[_type == "inviteSomeonePage"][0]{
  heroImage{ asset->{url, alt} },
  welcomeText,
  description,
  testimonial[]{
    ...,
    _type == "image" => { ..., asset->{url, alt} }
  },
  tips
}
`;
