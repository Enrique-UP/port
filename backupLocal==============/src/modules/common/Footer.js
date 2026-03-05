import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

function Footer() {
  return (
    <>
      <footer>
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-3">
                <Link className="logo" to="/">
                  <img src={Logo} alt="" />
                </Link>
                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet consectetur adipisicing elit libero minima fugit explicabo possimus hic animi culpa dolorum.</p>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <p className="hd">Quick Links</p>
                <ul className="links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li><Link to="/lifestyle">Life Style</Link></li>
                  <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <p className="hd">Useful Links</p>
                <ul className="links">
                  <li><Link to="#">Bookkeeping Pricing Structure</Link></li>
                  <li><Link to="#">Bookkeeping</Link></li>
                  <li><Link to="#">Accounting</Link></li>
                  <li><Link to="#">Financial Reporting</Link></li>
                  <li><Link to="#">Taxation Services</Link></li>
                  <li><Link to="#">QuickBooks Data Conversion Services</Link></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <p className="hd">Get in Touch</p>
                <ul className="contacts">
                  <li data-icon="&#xa001;"><a href="tel:0000000000" target="_blank">0000000000</a></li>
                  <li data-icon="&#xa003;"><a href="mailto:#" target="_blank">demo@gmail.com</a></li>
                  <li data-icon="&#xa004;">
                    <a href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Lorem</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <p className="copy">Copyright &copy; with all rights reserved.</p>
          </div>
        </div>
      </footer>
      <a className="fixNum" href="tel:000000000" target="_blank">
        <i className="icon">&#xa001;</i>
        Call Us 0000000000
      </a>
    </>
  );
}

export default Footer;
