import {Helmet} from "react-helmet";
import Banner from "./common/Banner";

function ContactUs() {
  return (
    <>
      <Helmet>
          <title>Contact Us</title>
      </Helmet>
      <Banner
        pageName="Contact Us" 
        pageText="Contact Us page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
        showBreadcrumbs={true}
      />
      <section className="section contactUs">
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
                  <label htmlFor="name">Full Name*</label>
                  <input className="inputText" id="name" type="text" placeholder="Enter your full name" required="" />
                </div>
                {/* field */}
                <div className="field">
                  <label htmlFor="email">Email Address*</label>
                  <input className="inputText" id="email" type="email" placeholder="Enter your email address" required="" />
                </div>
                {/* field */}
                <div className="field">
                  <label htmlFor="message">Message*</label>
                  <textarea className="inputText" id="message" rows="4" placeholder="Write your message here..." required=""></textarea>
                </div>
                {/* field */}
                <div className="btns">
                  <button>
                    <span>Submit</span>
                    <i className="icon">&#xA021;</i>
                  </button>
                </div>
                {/* btns */}
              </form>
            </div>
            <div className="col-lg-5">
              <ul className="contactBox">
                <li>
                  <a href="#" target="_blank">
                    <i className="icon">&#xA001;</i>
                    <span><b>Phone Number</b>0000000000</span>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="icon">&#xA003;</i>
                    <span><b>Email Address</b>demo@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                    <i className="icon">&#xA039;</i>
                    <span><b>Address</b>Lorem</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
