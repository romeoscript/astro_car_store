
import Logo from "../images/logo/logo.png";
import '../styles/NavbarStyles/_index.scss'
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/about">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/models">
                Models
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/team">
                Our Team
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo.src} alt="logo-img" />
            </a>
          </div>
          <ul className="navbar__links">
            <li>
              <a className="home-a" href="/">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a className="about-link" href="/about">
                About
              </a>
            </li>
            <li>
              {" "}
              <a className="models-link" href="/models">
                Vehicle Models
              </a>
            </li>
            <li>
              {" "}
              <a className="testi-link" href="/testimonials">
                Testimonials
              </a>
            </li>
            <li>
              {" "}
              <a className="team-link" href="/team">
                Our Team
              </a>
            </li>
            <li>
              {" "}
              <a className="contact-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__sign-in" href="/">
              Sign In
            </a>
            <a className="navbar__buttons__register" href="/">
              Register
            </a>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
