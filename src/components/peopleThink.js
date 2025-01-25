import React from "react";
import "../assets/peopleThink.css";
import img1 from "../images/people1.svg";
import img2 from "../images/people1.svg";
import img3 from "../images/people1.svg";

function About() {
  return (
    <div className="about">
      <h1>What the People Thinks About Us</h1>
      <div className="people">
        <div>
          <div>
            <img src={img1} alt="" />
            <h3 className="work">
              Nattasha Mith <p>Sydney, USA </p>
            </h3>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
            has been.
          </p>
        </div>
        <div>
          <div>
            <img src={img2} alt="" />
            <h3 className="work2">
              Raymond Galario <p>Sydney, Australia </p>
            </h3>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
            has been scrambled it to make a type book.
          </p>
        </div>
        <div>
          <div>
            <img src={img3} alt="" />
            <h3 className="work2">
              Benny Roll <p>Sydney, New York </p>
            </h3>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
            has been scrambled.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
