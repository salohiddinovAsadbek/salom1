import logo1 from "../images/homeAsadbek1.svg";
import logo2 from "../images/homeAsadbek2.svg";
import logo3 from "../images/homeAsadbek3.svg";
import logo4 from "../images/homeAsadbek4.svg";
import logo5 from "../images/homeAsadbek5.svg";
import "../assets/homeLogos.css";

function HomeLogos() {
  return (
    <div className="homeLogos">
      <img src={logo1} alt="logo" />
      <img src={logo2} alt="logo" />
      <img src={logo3} alt="logo" />
      <img src={logo4} alt="logo" />
      <img src={logo5} alt="logo" />
    </div>
  );
}

export default HomeLogos;
