import React from "react";
import "../assets/servicesCards.css";
import rigthLine from "../images/arrowRight1.svg";

function ServicesCards() {
  return (
    <div className="about-comp">
      <div className="about-parent">
        <div className="about-child">
          <h1>Project Plan</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="read-plus-vector">
            <h3>Read More</h3>
            <img src={rigthLine} alt="" />
          </div>
        </div>
        <div className="about-child">
          <h1>Project Plan</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="read-plus-vector">
            <h3>Read More</h3>
            <img src={rigthLine} alt="" />
          </div>
        </div>
        <div className="about-child">
          <h1>Retail Design</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="read-plus-vector">
            <h3>Read More</h3>
            <img src={rigthLine} alt="" />
          </div>
        </div>
        <div className="about-child">
          <h1>2d/3d Art Work</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="read-plus-vector">
            <h3>Read More</h3>
            <img src={rigthLine} alt="" />
          </div>
        </div>
        <div className="about-child">
          <h1>Interior Work</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="read-plus-vector">
            <h3>Read More</h3>
            <img src={rigthLine} alt="" />
          </div>
        </div>
        <div className="about-child">
          <h1>Decoration Work</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="read-plus-vector">
            <h3>Read More</h3>
            <img src={rigthLine} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
