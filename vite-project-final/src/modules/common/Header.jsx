import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/aboutus">About Us</NavLink>
      <br />
      <NavLink to="/contactus">Contact Us</NavLink>
      <br /><br /><br />
    </>
  );
}
