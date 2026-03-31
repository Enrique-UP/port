import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 logo">
              <Link to="/"><img src={logo} /></Link>
            </div>
            <div className="col-12">
              <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/thankyou">Thank You</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section className="copy">
        <div className="container">
          <div className="fw">Copyright &copy; <span>{new Date().getFullYear()}</span> with all rights reserved.</div>
        </div>
      </section>
    </>
  );
}
