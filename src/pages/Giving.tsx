import PageBanner from "../components/banner/PageBanner";
import type { MinimalHeroSection } from "../lib/types/about";

const bannerData: MinimalHeroSection = {
  _type: "heroSection",
  title: "Giving",
  heading: "Support the Restoration Arena",
  subtext: "Your generosity helps us continue our work. Every gift matters.",
  images: [
    {
      _type: "image",
      asset: {
        _ref: "some-reference-id",
        _type: "reference",
        url: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ],
};

const Giving = () => {
  return (
    <div>
      <PageBanner data={bannerData} color="light" />

      <div className="container py-16">
        <form
          style={{ textAlign: "center" }}
          className="flex flex-col items-center w-40 mx-auto mb-12"
          name="PrePage"
          method="post"
          action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
        >
          <input
            type="hidden"
            name="LinkId"
            value="a7f70d8f-c1d4-4e4e-9e37-ab45bef42b31"
          />
          <input
            type="image"
            src="//content.authorize.net/images/donate-gold.gif"
            alt="Donate"
          />
        </form>

        <p style={{ fontSize: "0.89em", textAlign: "center" }}>
          <strong>
            <u>Refunds</u>
          </strong>
          <br />
          To request a refund, please <a href="/contact">contact us</a>.<br />
          All refunds will be made by check.
        </p>
      </div>
    </div>
  );
};

export default Giving;
