import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const routes = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about-us" },
    { id: 3, name: "Get Involved", url: "/get-involved" },
    // { id: 4, name: "Pastor's Corner", url: "/pastors-corner" },
    { id: 5, name: "Sermons", url: "/sermons" },
    { id: 6, name: "Events", url: "/events" },
  ];
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const toggleNav = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="flex top-0 shadow">
      <Link to="/">
        <img
          src="/icons/logo@2x 1.png"
          alt="RCCG City of David Logo"
          className="logo h-12"
        />
      </Link>

      <nav className={`${isActive && "open"}`}>
        <ul>
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                to={route.url}
                className={`nav-linkk ${
                  location.pathname === route.url && "nav-link-active"
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* for the button and hamburger menu */}
      <div className="bb">
        <a
          href="https://simplecheckout.authorize.net/payment/CatalogPayment.aspx"
          target="_blank"
        >
          <button className="give-button">Give Online</button>
        </a>

        {/* Hamburger Menu  */}
        <div
          className={`hamburger-menu ${isActive && "active"}`}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
