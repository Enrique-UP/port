import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <br />
            <NavLink to="/about">About Us</NavLink>
            <br />
            <NavLink to="/gallery">Gallery</NavLink>
            <br />
            <NavLink to="/contact">Contact Us</NavLink>
            <br /><br /><br />
        </>
    )
}
