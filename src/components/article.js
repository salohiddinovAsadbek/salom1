import React from "react";
import "../assets/articel.css";

// import Design from '../images/design.png'
function Articles() {
  return (
    <div className="news">
      <header>Articles & News</header>
      <p className="kitchen-title">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <div className="carts">
        <div className="cart-one">
          <div className="img">
            <button>Kitchan Design</button>
          </div>
          <p className="lets">
            Let’s Get Solution For Building Construction Work
          </p>
          <div className="btn">
            <p>26 December,2022 </p>
            <button>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div style={{ backgroundColor: "#F4F0EC" }} className="cart-one">
          <div className="img1">
            <button>Living Design</button>
          </div>
          <p className="lets">
            Low Cost Latest Invented Interior Designing Ideas.
          </p>
          <div className="btn">
            <p>22 December,2022 </p>
            <button style={{ backgroundColor: "white" }}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="cart-one">
          <div className="img2">
            <button>Interior Design</button>
          </div>
          <p className="lets">
            Best For Any Office & Business Interior Solution
          </p>
          <div className="btn">
            <p>25 December,2022 </p>
            <button>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
