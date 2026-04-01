import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="fw">
            <Link to="/" className="logo"><img src={logo} /></Link>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/inner">Inner Page</NavLink>
              <NavLink to="/lifestyle">Life Style</NavLink>
              <NavLink to="/contactus">Contact Us</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
