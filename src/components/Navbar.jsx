
import Logo from "../images/logo/logo.png";
import '../styles/NavbarStyles/_index.scss'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  console.log(nav);
  return (
    <>
      <nav>
        {/* mobile */}
        {nav && <div className='mobile-navbar1'>
          <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} to="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/about">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/models">
                Models
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/team">
                Our Team
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>}

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

          <div className='mobile_menu'>
            {nav ? < CloseIcon onClick={openNav} style={{ cursor: 'pointer' }} /> : < MenuIcon onClick={openNav} style={{ cursor: 'pointer' }} />}
          </div>

         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
