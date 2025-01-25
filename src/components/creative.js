import React from "react";
import "../assets/creative.css";
import { useState } from "react";
import img3 from "../images/arrowRight1.svg";
import axios from "axios";
import toast from "react-hot-toast";

function Creative() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intrested, setintrested] = useState("");

  const handleSubmit = () => {
    const token = "7182806734:AAESXvxtTJ0P6JOYyUqXgTg-sgDUObi6pTY";
    const chad_id = 6244316872;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const infoUser = {
      name: name,
      email: email,
      intrested: intrested,
    };

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chad_id,
        text: JSON.stringify(infoUser),
      },
    })
      .then((res) => {
        toast.success("Successfully");
      })
      .catch((error) => {
        toast.error("Try again");
      });

    setEmail("");
    setName("");
    setintrested("");
  };
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
      <button onClick={handleSubmit}>
        Our Concept <img src={img3} alt="" />
      </button>
    </div>
  );
}

export default Creative;
