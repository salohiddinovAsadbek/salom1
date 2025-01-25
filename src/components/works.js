import "../assets/work.css";
import worksPhoto1 from "../images/work1.png";
import paintIcon from "../images/paint1.svg";
import worksPhoto2 from "../images/work2.png";
import paintIcon2 from "../images/paint2.svg";
import worksPhoto3 from "../images/work3.png";
import paintIcon3 from "../images/paint3.svg";
import worksPhoto4 from "../images/work4.png";
import paintIcon4 from "../images/paint4.png";

function Works() {
  return (
    <div>
      <div className="works-wrapper">
        <div className="works-parent">
          <h1>How We Work</h1>
          <p>
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
          <div className="works-first-flex">
            <div className="works-first-flex_left">
              <img src={worksPhoto1} alt="work1" />
            </div>
            <div className="works-first_right">
              <img src={paintIcon} alt="paintIcon" />
              <h2>Concept & Details</h2>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.
              </p>
            </div>
          </div>
          <div className="works-second-flex">
            <div className="works-second-left">
              <img src={paintIcon2} alt="" />
              <h1>Idea for Work</h1>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.{" "}
              </p>
            </div>
            <div className="works-second-right">
              <img src={worksPhoto2} alt="" />
            </div>
          </div>
          <div className="works-first-flex">
            <div className="works-first-flex_left">
              <img src={worksPhoto3} alt="work1" />
            </div>
            <div className="works-first_right">
              <img src={paintIcon3} alt="paintIcon" />
              <h2>Design</h2>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.
              </p>
            </div>
          </div>
          <div className="works-second-flex">
            <div className="works-second-left">
              <img src={paintIcon4} alt="" />
              <h1>Perfection</h1>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.
              </p>
            </div>
            <div className="works-second-right">
              <img src={worksPhoto4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
