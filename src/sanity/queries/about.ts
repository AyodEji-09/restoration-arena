export const aboutPageQuery = `
*[_type == "aboutPage"][0]{
  title,
  sections[]{
    _key,
    _type,

    // HERO
    _type == "heroSection" => {
      title,
      heading,
      images[]{ asset-> }
    },

    // WHO WE ARE
    _type == "whoWeAreSection" => {
      title,
      heading,
      message[]{
        ...,
        _type == "image" => { ..., asset-> }
      },
      ctaText,
      ctaLink,
      image{ asset-> }
    },

    // VALUE SECTION
    _type == "valueSection" => {
      title,
      values[]{
        icon{ asset-> },
        color,
        heading,
        text
      }
    },

    // MINISTERS SECTION
    _type == "ministersSection" => {
      title,
      ministers[]{
        name,
        title,
        image{ asset-> },
        message[]{
          ...,
          _type == "image" => { ..., asset-> }
        }
      }
    }
  }
}
`;
