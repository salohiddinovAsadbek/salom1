import "../assets/aboutTop.css";
import AboutTop1 from "../images/aboutTop1.png";
import AboutTop2 from "../images/aboutTop2.png";
import AboutTop3 from "../images/aboutTop3.png";

function AboutTop({ id, title }) {
  let img = "";

  switch (id) {
    case "1":
      img = AboutTop1;
      break;
    case "2":
      img = AboutTop2;
      break;
    case "3":
      img = AboutTop3;
      break;
    default:
      break;
  }
  console.log();

  return (
    <div className="aboutTop" style={{ backgroundImage: `url(${img})` }}>
      <div>
        <h1>{title}</h1>
        <p>Home / {title}</p>
      </div>
    </div>
  );
}

export default AboutTop;
