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
              <li>
                  <i class="icon"><img src={style} /></i>
                  <span>Fashion & Styling</span>
              </li>
              <li>
                <i className="icon">&#xa051;</i>
                <span>Nature Sightseeing</span>
              </li>
              <li>
                  <i class="icon">&#xa083;</i>
                  <span>Photography</span>
              </li>
              <li>
                <i className="icon">&#xa091;</i>
                <span>Food Lover</span>
              </li>
              
              <li>
                  <i class="icon">&#xa092;</i>
                  <span>Road Trips</span>
              </li>
              <li>
                <i className="icon">&#xa090;</i>
                <span>Traveling</span>
              </li>
              <li>
                <i className="icon">&#xa060;</i>
                <span>Biking</span>
              </li>
              <li>
                <i className="icon">&#xa061;</i>
                <span>Car Driving</span>
              </li>              
              <li>
                <i class="icon"><img src={camping} /></i>
                <span>Camping</span>
              </li>
              <li>
                  <i class="icon">&#xa094;</i>
                  <span>Swimming</span>
              </li>
              <li>
                  <i class="icon"><img src={hikingTrekking} /></i>
                  <span>Hiking / Trekking</span>
              </li>
              <li>
                <i class="icon"><img src={cricket} /></i>
                <span>Games & Sports</span>
              </li>
              <li>
                  <i class="icon"><img src={fitAth} /></i>
                  <span>Fitness & Athletics</span>
              </li>
              <li>
                <i class="icon"><img src={interiorDesign} /></i>
                <span>Interior Designing</span>
              </li>
              <li>
                <i className="icon">&#xa066;</i>
                <span>Listening Music</span>
              </li>
              <li>
                <i className="icon">&#xa075;</i>
                <span>Watching Movies</span>
              </li>
              <li>
                  <i class="icon"><img src={socialMedia} /></i>
                  <span>Social Media</span>
              </li> 
              <li>
                  <i class="icon"><img src={socialWork} /></i>
                  <span>Social Work</span>
              </li>
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
