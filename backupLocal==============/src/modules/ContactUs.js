import {Helmet} from "react-helmet";

// import '../sass/modules/contactUs.scss';
// import img0 from '../images/gallery/0.jpg';

function ContactUs() {
  return (
    <>
      <Helmet>
          <title>About Us</title>
      </Helmet>
      <section className="section banner">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6 col-xl-5">
              <hgroup> 
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis totam</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam.</p>
                <div className="btns"> <a href="#" target="_blank"><i className="icon">&#xa041; </i><span>0000000000</span></a></div>
              </hgroup>
            </div>
            <div className="col-lg-6 col-xl-7 imgEnd"><img src="./assets/images/banner1.webp" alt="" width="600" /></div>
          </div>
        </div>
      </section>
      <section className="breadcrumbs"> 
        <div className="container"> 
          <ul> 
            <li> <a href="#">Home</a></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
      <section className="section contactPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup className="center">
                <h2>Contact Us</h2>
                <p>Get in touch &mdash; we respond quickly.</p>
              </hgroup>
            </div>
            <div className="col-lg-7">
              <form className="form" action="#">
                <div className="field">
                  <label for="name">Full Name*</label>
                  <input className="inputText" id="name" type="text" placeholder="Enter your full name" required="" />
                </div>
                {/* field */}
                <div className="field">
                  <label for="email">Email Address*</label>
                  <input className="inputText" id="email" type="email" placeholder="Enter your email address" required="" />
                </div>
                {/* field */}
                <div className="field">
                  <label for="message">Message*</label>
                  <textarea className="inputText" id="message" rows="4" placeholder="Write your message here..." required=""></textarea>
                </div>
                {/* field */}
                <div className="btns">
                  <button><span>Submit</span><i className="icon"> &#xA021;</i></button>
                </div>
                {/* btns */}
              </form>
            </div>
            <div className="col-lg-5">
              <ul className="contactBox">
                <li><a href="#" target="_blank"><i className="icon">&#xA001;</i><span><b>Phone Number</b>0000000000</span></a></li>
                <li><a href="#" target="_blank"><i className="icon">&#xA003;</i><span><b>Email Address</b>demo@gmail.com</span></a></li>
                <li><a href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i className="icon">&#xA039;</i><span><b>Address</b>Lorem</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
