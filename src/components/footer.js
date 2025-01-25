import mainLogo1 from "../images/mainLogo2.svg";
import logo1 from "../images/logoF1.svg";
import logo2 from "../images/logoF2.svg";
import logo3 from "../images/logoF3.svg";
import logo4 from "../images/logoF4.svg";
import "../assets/footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div>
          <img src={mainLogo1} alt="mainLogo" />
          <p>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="logosFooter">
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo1" />
            <img src={logo3} alt="logo1" />
            <img src={logo4} alt="logo1" />
          </div>
        </div>
        <div className="footerCards">
          <h1>Pages</h1>
          <div>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/">Our Projects</NavLink>
            <NavLink to="/">Our Team</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/services">Services</NavLink>
          </div>
        </div>
        <div className="footerCards">
          <h1>Services</h1>
          <div>
            <NavLink to="/">Kitchan</NavLink>
            <NavLink to="/">Living Area</NavLink>
            <NavLink to="/">Bathroom</NavLink>
            <NavLink to="/">Dinning Hall</NavLink>
            <NavLink to="/">Bedroom</NavLink>
          </div>
        </div>
        <div className="footerCards">
          <h1>Contact</h1>
          <div className="footerError">
            <NavLink to="/">
              55 East Birchwood Ave. Brooklyn, New York 11201
            </NavLink>
            <NavLink to="/">contact@interno.com</NavLink>
            <NavLink to="/">(123) 456 - 7890</NavLink>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </p>
      </div>
    </div>
  );
}

export default Footer;
