import React from "react";
import "../assets/creative.css";
import { useState } from "react";
import img3 from "../images/arrowRight1.svg";

function Creative() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intrested, setintrested] = useState("");
  return (
    <div className="creative">
      <h1>Creative project? Let's have a productive talk.</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Hello Iam Intrested in.."
          onChange={(e) => setintrested(e.target.value)}
        />
      </div>
      <button>
        Our Concept <img src={img3} alt="" />
      </button>
    </div>
  );
}

export default Creative;
