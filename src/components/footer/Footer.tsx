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
          <a href="../pages/about.html">
            <button>READ MORE</button>
          </a>
        </div>
        <div className="links order-3 lg:order-2">
          <p>Quick links</p>
          <p>
            <a href="../pages/about.html">About</a>
          </p>
          <p>
            <a href="../pages/contact.html">Contact</a>
          </p>
          <p>
            <a href="../pages/media.html">Media</a>
          </p>
        </div>
        <div className="socials order-2 lg:order-3">
          <p>Connect</p>
          <div>
            <a
              href="https://www.instagram.com/rccgcityofdavidcalgary_?igsh=MzN3ODVkcjJmMmJw"
              target="_blank"
            >
              <img src="/icons/Group.png" alt="ig-icon" />
            </a>
            <a href="https://www.https://www.facebook.com/RCCGCOD2015/">
              <img src="/icons/fontisto_facebook.png" alt="fb-icon" />
            </a>
            <a
              href="https://www.youtube.com/@rccgcityofdavidcalgarycana1981"
              target="_blank"
            >
              <img src="/icons/logos_youtube-icon.png" alt="yt-icon" />
            </a>
          </div>
        </div>
        <div className="contact order-4">
          <p>
            Phone
            <br />
            <span>1-403-401-5671</span>
          </p>
          <p>
            Email
            <br />
            <span>info@rccgcityofdavidcalgary.com</span>
          </p>
          <p>
            Address
            <br />{" "}
            <span>
              Greenview Community Association 5600
              <br /> Centre Street North, Calgary, AB T2K 0T3
            </span>
          </p>
        </div>
      </div>
      <hr className="mx-auto" />
      <p className="copy">
        © <span className="year"></span> RCCG City of David, Calgary. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
