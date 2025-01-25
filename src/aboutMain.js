import Navbar from "./components/navbar";
import Esteble from "./components/home2Sherzodbek";
import AboutTop from "./components/aboutTop";
import Creative from "./components/creative";
import Footer from "./components/footer";
import Person from "./components/person";

function AboutMain() {
  return (
    <div className="aboutMain">
      <Navbar />
      <AboutTop id="1" title="About Us" />
      <Esteble />
      <Person />
      <Creative />
      <Footer />
    </div>
  );
}

export default AboutMain;
