import React from "react";
import img1 from "../images/sh1.svg";
import img2 from "../images/sh2.svg";
import img3 from "../images/sh3.svg";
import "../assets/living.css";

function Living() {
  return (
    <div className="living">
      <div className="living-left">
        <h1>We Create The Art Of Stylish Living Stylishly</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div>
          <img src={img1} alt="" />
          <h3>
            012345678 <p>Call Us Anytime</p>
          </h3>
        </div>
        <button>
          Get Free Estimate <img src={img2} alt="" />
        </button>
      </div>
      <img src={img3} alt="" />
    </div>
  );
}

export default Living;
