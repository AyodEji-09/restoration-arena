import type { SanityImage, WelcomeSectionType } from "../../lib/types/home";
import { SanityImageComp } from "../sanity-image/SanityImage";
import { BlockContentComponent } from "../vlock-content/BlockContent";

const WelcomeSection = ({ data }: { data: WelcomeSectionType }) => {

  return (
    <section className="sec-two">
      <h1 className="cod">{data.title}</h1>

      <h2>{data.subtext}</h2>

      <div className="pic-cont min-w-2xs overflow-hidden">
        <div className="h-[350px] rounded-xl overflow-hidden min-w-[250px] !w-[250px]">
          <SanityImageComp
            image={
              data.images?.[0] ||
              ({
                /* provide a default SanityImage object here */
              } as SanityImage)
            }
            alt="Image 1"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="h-[400px] rounded-xl overflow-hidden min-w-2xs !w-[300px]">
          <SanityImageComp
            image={
              data.images?.[1] ||
              ({
                /* provide a default SanityImage object here */
              } as SanityImage)
            }
            alt="Image 1"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="h-[350px] rounded-xl overflow-hidden min-w-[250px] w-[250px]">
          <SanityImageComp
            image={
              data.images?.[2] ||
              ({
                /* provide a default SanityImage object here */
              } as SanityImage)
            }
            alt="Image 1"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <h3>{data.heading}</h3>

      <div className="frame px-4">
        <img src="/icons/image 25.png" alt="img-church-icon" />
        <div>
          <BlockContentComponent value={data.message} />
          <p className="font-bold text-lg mt-8">– {data.pastorName?.name}</p>
          <p>{data.pastorName?.title}</p>
        </div>
        <img src="/icons/image 25.png" alt="img-church-icon" />
      </div>
    </section>
  );
};

export default WelcomeSection;
