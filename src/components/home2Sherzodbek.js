import "../assets/home2.css";
import img2 from "../images/sh12.svg";
import img1 from "../images/sh13.svg";
import img3 from "../images/arrowRight1.svg";
import img4 from "../images/do1.png";
import img5 from "../images/do2.png";

function Esteble() {
  return (
    <div className="esteble">
      <div className="interio">
        <img src={img2} alt="" />
        <div>
          <p>“</p>
          <p>
            I like an interior that defies labeling. I don't really want someone
            to walk into a room and know that I did it
          </p>
          <p>-BUNNY WILLIAMS</p>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="concept">
        <div>
          <h1>What We Do</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <button>
            Our Concept <img src={img3} alt="" />
          </button>
        </div>
        <img src={img4} alt="" />
      </div>
      <div className="concept">
        <div>
          <h1>The End Result</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <button>
            Our Concept <img src={img3} alt="" />
          </button>
        </div>
        <img src={img5} alt="" />
      </div>
    </div>
  );
}

export default Esteble;
