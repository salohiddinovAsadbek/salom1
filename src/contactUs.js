import React from "react";
import Navbar from "./components/navbar";
import AboutTop from "./components/aboutTop";
import Footer from "./components/footer";
import Map from "./components/map";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <AboutTop id="3" title="Contact Us" />
      <Map />
      <Footer />
    </div>
  );
}

export default ContactUs;
