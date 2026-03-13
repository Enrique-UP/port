import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

function Footer() {
  return (
    <>
      <footer class="section">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="logo">
                <Link to="/"><img src={Logo} /></Link>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-xl-3">
              <p class="head">About Us</p>
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque neque vel, molestias officiis, laboriosam doloribus architecto quas sed animi itaque dolorem accusantium rerum sit quod inventore eveniet labore quam ad illo delectus voluptatibus ut. Rem numquam modi, quis quas quos sed? Sit explicabo repellat molestias.</p>
              <p class="text mt0"><b>Id nesciunt reiciendis,</b> amet! Quibusdam ab tenetur autem nihil ratione illo. Eum, voluptatum ratione voluptatum ratione voluptatum ratione voluptatum ratione dicta vel accusamus, esse.</p>
            </div>
            <div class="col-sm-6 col-md-6 col-xl-3">
              <p class="head">Main Links</p>
              <ul class="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/lifestyle">Gallery</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem Dolor</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem Sit</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem Amit</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-xl-3">
              <p class="head">Social Posts</p>
              <div class="social">
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-xl-3">
              <p class="head">Contact Us</p>
              <div class="contact">
                <a class="number">
                  <span>
                    <b class="icon">&#xa001;</b>
                    <em>Phone No.</em>
                  </span>
                  <em class="txt">000</em>
                </a>
                <a class="mail">
                  <span>
                    <b class="icon">&#xa004;</b>
                    <em>Email ID.</em>
                  </span>
                  <em class="txt">000</em>
                </a>
                <a class="address">
                  <span>
                    <b class="icon">&#xa007;</b>
                    <em>Address</em>
                  </span>
                  <em class="txt">000</em>
                </a>
              </div>
              <p class="head">Social Links</p>
              <div class="media">
                <a class="icon" href="javascript:;" target="_blank">&#xa019;</a>
                <a class="icon" href="javascript:;" target="_blank">&#xa020;</a>
                <a class="icon" href="javascript:;" target="_blank">&#xa021;</a>
                <a class="icon" href="javascript:;" target="_blank">&#xa023;</a>
                <a class="icon" href="javascript:;" target="_blank">&#xa026;</a>
                <a class="icon fwt" href="javascript:;" target="_blank">&#xa025;</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright">
        <div class="container">Copyright &copy; 2026 with all rights reserved.</div>
      </div>
      <a className="fixNum" href="tel:000000000" target="_blank">
        <i className="icon">&#xa001;</i>
        Call Us 0000000000
      </a>
    </>
  );
}

export default Footer;
