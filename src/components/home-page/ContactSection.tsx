import type { ContactSection } from "../../lib/types/home";

const ContactSection = ({ data }: { data: ContactSection }) => {

  return (
    <section className="mb-16">
      <div className="container px-4 grid md:grid-cols-3 mx-auto gap-8">
        <div className="address-cont self-center">
          <h1 className="text-2xl font-bold">{data.heading}</h1>
          <div>
            <div className="ad">
              <img src="/icons/hugeicons_location-10.png" alt="location icon" />
              <div className="ddrr w-full">
                <h3 className="rr font-semibold">
                  {data?.contacts?.[0].title}
                </h3>
                <p className="rr">{data?.contacts?.[0].description}</p>
              </div>
            </div>
            <div className="ad">
              <img src="/icons/mdi-light_phone.png" alt="location icon" />
              <div className="ddrr w-full">
                <h3 className="rr font-semibold">
                  {data?.contacts?.[1].title}
                </h3>
                <p className="rr">{data?.contacts?.[1].description}</p>
              </div>
            </div>
            <div className="ad">
              <img src="/icons/mdi-light_email.png" alt="location icon" />
              <div className="ddrr w-full">
                <h3 className="rr font-semibold">
                  {data?.contacts?.[2].title}
                </h3>
                <p className="rr md:max-w-xl overflow-hidden text-ellipsis">
                  {data?.contacts?.[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 rounded-2xl overflow-hidden">
          <img
            className="w-full h-full"
            src={data.image?.asset?.url}
            alt="img-church-white-background"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
