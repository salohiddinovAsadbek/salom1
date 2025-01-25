import Arrow from "../images/Vector.svg";
import "../assets/projectPlan.css";

function ProjectPlan() {
  return (
    <div className="projectPlan">
      <div>
        <h1>Project Plan</h1>
        <p>
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <p>
          <span>Read More</span>
          <span>
            <img src={Arrow} alt="arrow" />
          </span>
        </p>
      </div>
      <div>
        <h1>Interior Work</h1>
        <p>
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <p>
          <span>Read More</span>
          <span>
            <img src={Arrow} alt="arrow" />
          </span>
        </p>
      </div>
      <div>
        <h1>Realization</h1>
        <p>
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <p>
          <span>Read More</span>
          <span>
            <img src={Arrow} alt="arrow" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProjectPlan;
