import { useEffect, useState } from "react";
import BeliefCard from "../components/beliefs/BeliefCard";
import { Link } from "react-router-dom";
import ServiceCard from "../components/service-card/ServiceCard";

const Home = () => {
  const images = [
    "/images/worship.jpg",
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/hero-4.jpg",
  ]; // Add your image paths

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <main>
      <section className="relative w-full overflow-hidden" id="backgroundDiv">
        <div className="absolute inset-0 bg-black/35 z-10"></div>
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-top transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="image-container relative z-10 space-y-4">
          <h2 className="text-xl font-semibold">Welcome to Our Church</h2>
          <article>
            <h1 className="font-bold text-5xl lg:text-6xl uppercase">
              Building A <br />
              Family of God
            </h1>
            <p className="text-xl">
              worship with us at RCCG Restoration Arena
              <br />
              Parish, Stamford.
            </p>
          </article>
          <a href="./pages/about.html">
            <button className="mt-8">LEARN MORE</button>
          </a>
        </div>
      </section>
      <section className="sec-two">
        <h1 className="cod">WELCOME TO RESTORATION ARENA</h1>

        <h2>
          Greetings in the name of the Lord Jesus Christ. It is my pleasure to
          welcome you to the website of RCCG Restoration Arena, Stamford. It is
          our hope that this website gives you an insight into who we are and
          what we do. Our church is a safe place for people like you and I. It
          is a place where prayers get answered, people receive healing, and
          problems are solved.
        </h2>

        <div className="pic-cont min-w-2xs overflow-hidden">
          <div className="h-[350px] rounded-xl overflow-hidden min-w-[250px] !w-[250px]">
            <img
              src="/images/pastor-2.jpg"
              alt="Image 1"
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="h-[400px] rounded-xl overflow-hidden min-w-2xs !w-[300px]">
            <img
              src="/images/pastor.jpg"
              className="w-full h-full object-cover object-top"
              alt="Image 1"
              loading="lazy"
            />
          </div>
          <div className="h-[350px] rounded-xl overflow-hidden min-w-[250px] w-[250px]">
            <img
              src="/images/sermon.png "
              className="w-full h-full object-cover object-top"
              alt="Image 1"
              loading="lazy"
            />
          </div>
        </div>

        <h3>FROM OUR PASTOR</h3>

        <div className="frame px-4">
          <img src="/icons/image 25.png" alt="img-church-icon" />
          <div>
            <p>
              Thanks for visiting RCCG, Restoration Arena Stamford’s Church
              website. It is our hope that our site will give you a glimpse into
              who we are and what we do. We invite you to join us for one of our
              services and get to know us and experience the love of Christ
              through our church family. We have found that Jesus really does
              give abundant life and it is our desire that you would experience
              this with us.
              <br />
            </p>
            <p className="font-bold text-lg mt-8">– Pastor Akinbobola Modupe</p>
            <p>Parish Pastor</p>
          </div>
          <img src="/icons/image 25.png" alt="img-church-icon" />
        </div>
      </section>
      <section className="container mx-auto mt-20 px-4">
        <div className="grid md:grid-cols-3 gap-4">
          <BeliefCard
            icon="Vector.png"
            title="We commune together"
            content="We lead people to encounter God, embrace others and elevate their world."
          />
          <BeliefCard
            icon="Vector-1.png"
            title="Impacting our Local community"
            content="We believe that this kingdom work can only be accomplished through God’s strength and through partnership with members of our local community. Therefore we partner together with organizations that share our commitment to improving the lives of others through feeding, donations etc"
          />
          <BeliefCard
            icon="Vector-2.png"
            title="Soul Winning"
            content="RCCG Restoration Arena believes God has called every follower of Jesus to “make disciples among all peoples” (Matthew 28:18). In making disciples we are proclaiming His glory among the nations and inviting everyone, everywhere to bow their knee to the Lordship of Jesus."
          />
        </div>
      </section>

      <section className="sec-three">
        <div className="sec-three-div-container">
          <p>GET TO KNOW US</p>
          <h2>WHO ARE WE?</h2>
          <p>
            We are a parish of the Redeemed Christian Church of God at East Main
            street, Stamford.
          </p>
          <p>
            At Restoration Arena, we treat everyone like family Romans 13:8 “Owe
            no one anything, except to love one another; for the one who loves
            another has fulfilled the law”.
          </p>
          <Link to="/about-us">
            <button>LEARN MORE</button>
          </Link>
        </div>
        <img src="/images/Group 2270.png" alt="img-church-white-background" />
      </section>

      <section className="sec-four">
        <h2 className="tw">TRANSFORMATIVE WORSHIP EXPERIENCE</h2>
        <h1 className="eg">
          EXPERIENCE GOD IN HIS <br />
          FULLNESS
        </h1>

        <div className="cards-container mx-auto">
          <ServiceCard
            serviceName="Tuesday Evenings"
            time={["Digging Deep/ Bible Study (7:30pm-9:00pm)"]}
          />
          <ServiceCard
            serviceName="Thursday Evenings"
            time={["Faith Clinic / Prayer service (7:30pm-9:00pm)"]}
          />
          <ServiceCard
            serviceName="Night Vigil"
            time={[
              "Night Vigil (every first Friday of the month) (10:00pm-1:00am)",
            ]}
          />
          <ServiceCard
            serviceName="Sunday Service"
            time={[
              "Sunday School (9:40am-10:30am)",
              "Regular Service (10:30am-12:00pm)",
            ]}
          />
        </div>

        <div className="container px-4 grid md:grid-cols-3 mx-auto gap-8 mt-16">
          <div className="address-cont self-center">
            <h1 className="text-2xl font-bold">Reach Out and Connect.</h1>
            <div>
              <div className="ad">
                <img
                  src="/icons/hugeicons_location-10.png"
                  alt="location icon"
                />
                <div className="ddrr w-full">
                  <h3 className="rr font-semibold">Address</h3>
                  <p className="rr">
                    1069 East Main Street <br />
                    Stamford, CT 06902
                  </p>
                </div>
              </div>
              <div className="ad">
                <img src="/icons/mdi-light_phone.png" alt="location icon" />
                <div className="ddrr w-full">
                  <h3 className="rr font-semibold">Contact</h3>
                  <p className="rr">(917) 476-9552</p>
                </div>
              </div>
              <div className="ad">
                <img src="/icons/mdi-light_email.png" alt="location icon" />
                <div className="ddrr w-full">
                  <h3 className="rr font-semibold">Email</h3>
                  <p className="rr">rccgrestorationarenastamford@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full"
              src="/images/worship.jpg"
              alt="img-church-white-background"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
