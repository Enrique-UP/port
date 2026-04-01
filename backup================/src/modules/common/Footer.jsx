import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Global } from "./Global";

export default function Footer() {
  return (
    <>
      <footer>
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
      <a className="fixNum" href={Global.numTel} target="_blank"><i className="icon">&#xa001;</i>Call Us {Global.num}</a>
    </>
  );
}
