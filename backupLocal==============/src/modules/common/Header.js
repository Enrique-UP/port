import { Link, NavLink } from 'react-router-dom';

import Logo from '../../images/logo.png';

function Header() {
  const openMenu = (e) => {
    document.body.classList.add("back");
    e.currentTarget.closest("header").classList.add("active");
  };
  const closeMenu = (e) => {
    document.querySelectorAll("header menu:not(menu menu)").forEach((menu) => {
      menu.scrollTo({
        top: 0,
        // behavior: "smooth"
      });
    });
    setTimeout(function () {
      document.body.classList.remove("back");
    }, 400);
    e.currentTarget.closest("header").classList.remove("active");
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="fw">
            <div className="logoArea">
              <Link className="logo" to="/">              
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="navbar">
              <navbar>
                <Link className="logoMob" to="/">
                  <img src={Logo} alt="" />
                </Link>
                <menu>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/aboutus">About Us</NavLink></li>
                  {/* <li><a href="#">Lorem ipsum</a>
                    <menu>
                      <li><a href="#">Lorem ipsum dolor sit ameet lorem ipsum dolor</a></li>
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Lorem ipsum dolor sit ameet lorem ipsum dolor</a></li>
                      <li><a href="#">Lorem ipsum dolor sit ameet lorem ipsum dolor</a></li>
                      <li><a href="#">Lorem ipsum dolor sit</a></li>
                    </menu>
                  </li> */}
                  <li><NavLink to="/lifestyle">Life Style</NavLink></li>
                  <li><NavLink to="/contactus">Contact Us</NavLink></li>
                </menu>
              </navbar>
              <i className="icon close" onClick={closeMenu}>&#xa011;</i>
            </div>
            <div className="callMenu">
              <a className="callBtn" href="tel:0000000000" target="_blank">
                <i className="icon">&#xa001;</i>
                <span>0000000000</span>
              </a>
              <i className="icon menu" onClick={openMenu}>&#xa005;</i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
