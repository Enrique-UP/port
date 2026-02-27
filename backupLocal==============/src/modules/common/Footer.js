import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <footer>
        <div className="top">
          <div className="container">
            <div className="row"> 
              <div className="col-sm-6 col-md-12 col-lg-3">
                <a className="logo" href="#">
                  <img src="./assets/images/logo.png" alt=""/>
                </a>
                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet consectetur adipisicing elit libero minima fugit explicabo possimus hic animi culpa dolorum.</p>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <p className="hd">Quick Links</p>
                <ul className="links"> 
                  <li><a href="about">About Us</a></li>
                  <li><a href="#">How It Works</a></li>
                  <li><a href="tel:000000" target="_blank">Contact Us</a></li>
                  <li><a href="privacy">Privacy Policy</a></li>
                  <li><a href="refund">Refund Policy</a></li>
                  <li><a href="terms">Terms And Conditions</a></li>
                  <li><a href="lay">Layout</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <p className="hd">Useful Links</p>
                <ul className="links"> 
                  <li><a href="#">Bookkeeping Pricing Structure</a></li>
                  <li><a href="#">Bookkeeping</a></li>
                  <li><a href="#">Accounting</a></li>
                  <li><a href="#">Financial Reporting</a></li>
                  <li><a href="#">Taxation Services</a></li>
                  <li><a href="#">QuickBooks Data Conversion Services</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <p className="hd">Get in Touch</p>
                <ul className="contacts">
                  <li data-icon="&#xa001;"><a href="tel:0000000000" target="_blank">0000000000</a></li>
                  <li data-icon="&#xa003;"><a href="mailto:#" target="_blank">demo@gmail.com</a></li>
                  <li data-icon="&#xa004;"><a href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">LOrem</a></li>
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
      <a className="fixNum" href="tel:000000000" target="_blank"><i className="icon">&#xa001;</i>Call Us 0000000000</a>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/aboutus">About Us</Link>
        <br />
        <Link to="/lifestyle">Life Style</Link>
        <br />
        <Link to="/contactus">Contact Us</Link>
      </nav>
    </>
  );
}

export default Footer;
