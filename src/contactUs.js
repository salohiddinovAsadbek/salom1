import React from "react";
import Navbar from "./components/navbar";
import AboutTop from "./components/aboutTop";
import Footer from "./components/footer";
import Map from "./components/map";
import Contact from "./components/form2";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <AboutTop id="3" title="Contact Us" />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default ContactUs;
