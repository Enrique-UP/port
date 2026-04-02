import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import { Global } from "../common/Global";
import FormArea from "./FormArea.jsx";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="This is Inner page" />
      </Helmet>
      <Banner
        pageName="Contact Us"
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
      />
      <section className="section">
        <div className="container">
          <hgroup>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit ameet</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="contactUs">
                <ul className="contactBox">
                  <li>
                    <a href={Global.numTel} target="_blank">
                      <i className="icon">&#xA001;</i>
                      <span><b>Phone Number</b>{Global.num}</span>
                    </a>
                  </li>
                  <li>
                    <a href={Global.whatsappLink} target="_blank">
                      <i className="icon">&#xA025;</i>
                      <span><b>WhatsApp Number</b>{Global.whatsapp}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${Global.email}`} target="_blank">
                      <i className="icon">&#xA004;</i>
                      <span><b>Email Address</b>{Global.email}</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                      <i className="icon">&#xA007;</i>
                      <span><b>Address</b>{Global.address}</span>
                    </a>
                  </li>
                </ul>
                <FormArea />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55928250.58785387!2d-7.682147!3d31.176664!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1774592467853!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>{/* area-2 */}

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
