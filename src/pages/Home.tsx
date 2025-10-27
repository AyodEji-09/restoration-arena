import { useEffect, useState } from "react";
import type { HomePage, HomePageSection } from "../lib/types/home";
import { client } from "../sanity/client";
import { homePageQuery } from "../sanity/queries/home";

// Home Page Sections
import HeroSection from "../components/home-page/HeroSection";
import WelcomeSection from "../components/home-page/WelcomeSection";
import BeliefSection from "../components/home-page/BeliefSection";
import WhoWeAreSection from "../components/home-page/WhoWeAreSection";
import ProgramSection from "../components/home-page/ProgramSection";
import ContactSection from "../components/home-page/ContactSection";

const Home = () => {
  const [data, setData] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.fetch<HomePage>(homePageQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching HomePage:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Failed to load content.</p>;

  // Helper to dynamically render sections
  const renderSection = (section: HomePageSection) => {
    switch (section._type) {
      case "heroSection":
        return <HeroSection key={section._key} data={section} />;
      case "welcomeSection":
        return <WelcomeSection key={section._key} data={section} />;
      case "valueSection":
        return <BeliefSection key={section._key} data={section} />;
      case "whoWeAreSection":
        return <WhoWeAreSection key={section._key} data={section} />;
      case "programsSection":
        return <ProgramSection key={section._key} data={section} />;
      case "contactSection":
        return <ContactSection key={section._key} data={section} />;
      default:
        return null;
    }
  };

  return <main>{data.sections.map(renderSection)}</main>;
};

export default Home;
