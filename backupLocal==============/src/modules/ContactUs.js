import {Helmet} from "react-helmet";
import Banner from "./common/Banner";
import FormArea from "./common/FormArea";

function ContactUs() {
  return (
    <>
      <Helmet>
          <title>Contact Us</title>
      </Helmet>
      <Banner
        pageName="Contact Us" 
        pageText="Contact Us page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
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
                    <i className="icon">&#xA070;</i>
                    <span><b>WhatsApp Number</b>0000000000</span>
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
            <div className="col-lg-7">
              <FormArea />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
