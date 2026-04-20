import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import { Global } from "../common/Global";
import FormArea from "./FormArea.jsx";

const ContactData = [
  { link: Global.numTel, icon: "&#xa001;", text: "Phone Number", contact: Global.num },
  { link: Global.whatsappLink, icon: "&#xa025;", text: "WhatsApp Number", contact: Global.num },
  { link: `mailto:${Global.email}`, icon: "&#xa004;", text: "Email Address", contact: Global.email },
  { link: "https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D", icon: "&#xa007;", text: "Address", contact: Global.address }
];
const ContactTag = (props) => {
  return (
    <li>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <i className="icon" dangerouslySetInnerHTML={{ __html: props.icon }}></i>
        <span><b>{props.text}</b> {props.contact}</span>
      </a>
    </li>
  );
};

const FollowData = [
  { link: Global.fb, icon: "&#xa019;", name: "Facebook" },
  { link: Global.tw, icon: "&#xa020;", name: "Twitter" },
  { link: Global.lin, icon: "&#xa021;", name: "Linkedin" },
  { link: Global.skp, icon: "&#xa026;", name: "Skype" },
  { link: Global.ins, icon: "&#xa023;", name: "Instagram" },
  { link: Global.pnt, icon: "&#xa024;", name: "Pinterest" }
];
const FollowTag = (props) => {
  return (
    <li>
      <a href={props.link} target="_blank">
        <i className="icon" dangerouslySetInnerHTML={{ __html: props.icon }}></i>
        <b>Follow us on</b>
        <span>{props.name}</span>
      </a>
    </li>
  );
};

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
            <h2>Contact <span>Us</span></h2>
            <p>We're here to help you</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="contactUs">
                <div className="contactArea">
                  <p className="hd">Send us a Message</p>
                  <div className="ca">
                    <FormArea />
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd">Contact Details</p>
                  <div className="ca">
                    <ul className="contactBox">
                      {ContactData.map((val, ind) => (
                        <ContactTag key={ind} {...val} />
                      ))}
                    </ul>
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd">Opening Timings</p>
                  <div className="ca">
                    <ul className="time">
                      <li><b><i className="icon">&#xA011;</i><span>Sunday</span></b><span>09:00 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Monday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Tuesday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Wednesday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Thursday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Friday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Saturday</span></b><span>09:00 - 24:00</span></li>
                    </ul>
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd">Search Location</p>
                  <div className="ca">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55928250.58785387!2d-7.682147!3d31.176664!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1774592467853!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd">Follow Us</p>
                  <div className="ca">
                    <ul className="follow">
                      {FollowData.map((val, ind) => (
                        <FollowTag key={ind} {...val} />
                      ))}
                    </ul>  
                  </div>{/* ca */}
                </div>{/* contactArea */}
              </div>
            </div>{/* area-2 */}

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
