import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutTop from "./components/aboutTop";
import ServicesCards from "./components/servicesCards";
import Works from "./components/works";

function ServicesMain() {
  return (
    <div className="servicesMain">
      <Navbar />
      <AboutTop id="2" title="Services" />
      <ServicesCards />
      <Works />
      <Footer />
    </div>
  );
}

export default ServicesMain;
