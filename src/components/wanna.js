import ArrowGray from "../images/arrowGray.svg";
import "../assets/wanna.css";

function Wanna() {
  return (
    <div className="wanna">
      <div className="wannaWrapper">
        <h1>Wanna join the interno?</h1>
        <p>It is a long established fact will be distracted.</p>
        <button>
          <p>Contact With Us</p>
          <img src={ArrowGray} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Wanna;
