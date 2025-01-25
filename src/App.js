import "./style.css";
import { Route, Routes } from "react-router-dom";
import AboutMain from "./aboutMain";
import Main from "./main";
import ServicesMain from "./servicesMain";
import ContactUs from "./contactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutMain />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<ServicesMain />} />
    </Routes>
  );
}

export default App;
