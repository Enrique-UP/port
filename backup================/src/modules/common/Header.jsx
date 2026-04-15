import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="fw">
            <Link to="/" className="logo"><img src={logo} data-aos="fade-right" /></Link>
            <nav data-aos="fade-left">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/lifestyle">Gallery</NavLink>
              <NavLink to="/contactus">Contact Us</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
