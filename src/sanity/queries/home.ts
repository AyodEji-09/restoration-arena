export const homePageQuery = `
*[_type == "homePage"][0]{
  title,
  sections[]{
    _key,
    _type,
    
    // HERO SECTION
    _type == "heroSection" => {
      heading,
      title,
      subtext,
      ctaText,
      ctaLink,
      images
    },

    // WELCOME SECTION
    _type == "welcomeSection" => {
      title,
      subtext,
      images,
      heading,
      message[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      pastorName
    },

    // VALUE SECTION
    _type == "valueSection" => {
      title,
      values[]{
        icon,
        color,
        heading,
        text
      }
    },

    // WHO WE ARE SECTION
    _type == "whoWeAreSection" => {
      title,
      heading,
      message,
      cta,
      ctaLink,
      image{ asset->{url}, alt }
    },

    // PROGRAMS SECTION
    _type == "programsSection" => {
      title,
      heading,
      programs[]{
        icon,
        programTitle,
        details
      }
    },

    // CONTACT SECTION
    _type == "contactSection" => {
      heading,
      contacts[]{
        icon,
        title,
        description
      },
      image{ asset->{url}, alt }
    }
  }
}
`
