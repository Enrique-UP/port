import { Link } from "react-router-dom";
import { Global } from "./Global";
import img1 from "../../assets/images/lifeStyle/home1.jpg";
import camping from "../../assets/images/icons/camping.png";
import fitAth from "../../assets/images/icons/fitAth.png";

import style from "../../assets/images/icons/style.png";
import cricket from "../../assets/images/icons/cricket.png";
import swimming from "../../assets/images/icons/swimming.png";
import hikingTrekking from "../../assets/images/icons/hikingTrekking.png";
import interiorDesign from "../../assets/images/icons/interiorDesign.png";
import socialMedia from "../../assets/images/icons/socialMedia.png";
import socialWork from "../../assets/images/icons/socialWork.png";


const InterestTagData = [
    { int : "Fashion & Styling", icon : style },
    { int : "Nature Sightseeing", icon : "&#xa051;" },
    { int : "Photography", icon : "&#xa083;" },
    { int : "Food Lover", icon : "&#xa091;" },
    { int : "Road Trips", icon : "&#xa092;" },
    { int : "Traveling", icon : "&#xa090;" },
    { int : "Biking", icon : "&#xa060;" },
    { int : "Car Driving", icon : "&#xa061;" },
    { int : "Camping", icon : camping },
    { int : "Swimming", icon : "&#xa094;" },
    { int : "Hiking/Trekking", icon : hikingTrekking },
    { int : "Games & Sports", icon : cricket }, 
    { int : "Fitness & Athletics", icon : fitAth },
    { int : "Interior Designing", icon : interiorDesign }, 
    { int : "Listening Music", icon : "&#xa066;" },
    { int : "Watching Movies", icon : "&#xa075;" }, 
    { int : "Social Media", icon : socialMedia },
    { int : "Social Work", icon : socialWork }
];
const InterestTag = (props) => {
  const isImage = props.icon && props.icon.includes("/");
  return (
    <li>
      <i className="icon">
        {isImage ? (<img src={props.icon} alt="icon" />) : (<span dangerouslySetInnerHTML={{ __html: props.icon }} />)}
      </i>
      <span>{props.int}</span>
    </li>
  );
};

export default function LeftSidebar() {
  return (
    <>
      <div className="area-1">
        <div className="sideBar">
          <aside className="links">
            <p className="hd">Menu</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link>About Me</Link></li>
              <li><Link>My Worked Projects</Link></li>
              <li><Link>I Know</Link></li>
              <li><Link to="/lifestyle">Image Gallery</Link></li>
              <li><Link>My Childhood</Link></li>
              <li><Link>My Education</Link></li>
              <li><Link>My Lifestyle</Link></li>
              <li><Link>My Team</Link></li>
              <li><Link>Customer's Review</Link></li>
              <li><Link>Why Choose Me</Link></li>
              <li><Link to="/contactus">Contact Me</Link></li>
            </ul>
          </aside>
          <aside className="about">
            <img data-src={img1} />
            <p><span>Loremm Ipsu</span> Lorem ipsum dolor sit ameet loremipsum dolor sit ameet loremipsum solor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet. <Link to="/">Explore More</Link></p>
          </aside>
          <aside className="interests">
            <p className="hd">Interests</p>
            <ul>
              {
                InterestTagData.map((val, ind) => {
                  return <InterestTag key={ind} int={val.int} icon={val.icon} />
                })
              }
            </ul>
          </aside>
          <aside className="ads">
            <a href={Global.numTel} target="_blank">
              <b>
                Get a 50%<br />
                Discount
              </b>
              <span>Online Order Now</span>
            </a>
          </aside>
        </div>
      </div>
    </>
  );
}
