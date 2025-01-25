import "../assets/form2.css";
function Contact() {
  return (
    <div className="Contact">
      <header>
        We love meeting new people <br /> and helping them.
      </header>
      <div className="section">
        <div className="info">
          <div className="gmail">
            <i className="fa-regular fa-envelope"></i>
            <p>info@yourdomain.com</p>
          </div>
          <div className="phone">
            <i className="fa-solid fa-phone"></i>
            <p>+1 (378) 400-1234</p>
          </div>
          <div className="web">
            <i className="fa-solid fa-earth-europe"></i>
            <p>www.yourdomain.com</p>
          </div>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="send-input">
          <div className="inputs">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <input type="number" placeholder="Phone" />
          </div>
          <div className="text">
            <input type="text" placeholder="Hello Iam Intrested in.." />
          </div>
          <div className="btn">
            <button>Send Now</button>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
