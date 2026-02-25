import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container mx-auto px-4 grid grid-col-2 md:grid-cols-3 lg:grid-cols-4  gap-8 py-12">
        <div className="log-btn md:col-span-3 lg:col-span-1">
          <img
            src="/icons/logo@2x 1.png"
            alt="RCCG Restoration Arena Logo"
            className="h-12 !mr-auto"
          />
          <p>
            We lead people to encounter God, embrace others and elevate their
            world.
          </p>
          <Link to="/about-us">
            <button>READ MORE</button>
          </Link>
        </div>
        <div className="links order-3 lg:order-2">
          <p>Quick links</p>
          <p>
            <Link to="/about-us">About</Link>
          </p>
          <p>
            <Link to="/contact-us">Contact</Link>
          </p>
          <p>
            <Link to="/get-involved">Get Involved</Link>
          </p>
        </div>
        <div className="socials order-2 lg:order-3">
          <p>Connect</p>
          <div>
            <a
              href="https://www.instagram.com/rccgrestorationarenastamford?igsh=MWY2MDY3bTVpM2Zrag=="
              target="_blank"
            >
              <img src="/icons/Group.png" alt="ig-icon" />
            </a>
            <a
              href="https://www.facebook.com/RCCGRestorationArenaStamford?mibextid=ZbWKwL"
              target="_blank"
            >
              <img src="/icons/fontisto_facebook.png" alt="fb-icon" />
            </a>
            <a
              href="https://x.com/rccgras?t=4_xS3_u-R9q3tv0KpuVsZw&s=09"
              target="_blank"
            >
              <img src="/icons/x.svg" alt="x-icon" className="bg-white" />
            </a>
          </div>
        </div>
        <div className="contact order-4">
          <p>
            Phone
            <br />
            <span>917 476 9552</span>
          </p>
          <p>
            Email
            <br />
            <span>rccgrestorationarenastamford@gmail.com</span>
          </p>
          <p>
            Address
            <br /> <span>1069 East Main Street Stamford CT</span>
          </p>
        </div>
      </div>
      <hr className="mx-auto" />
      <p className="copy">
        © <span className="year"></span> RCCG Restoration Arena Stamford. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
