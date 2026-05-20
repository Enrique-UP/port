import { Link } from "react-router-dom";

import img1 from "../../assets/images/AdventureMoments/1.jpg";
import img2 from "../../assets/images/AdventureMoments/2.jpg";
import img3 from "../../assets/images/AdventureMoments/3.jpg";
import img4 from "../../assets/images/AdventureMoments/4.jpg";
import img5 from "../../assets/images/AdventureMoments/5.jpg";
import img6 from "../../assets/images/AdventureMoments/6.jpg";

export default function AdventureMoments() {
  return (
    <>
      <section className="section advenMoments">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h3>My <span>Adventures</span></h3>
                <p>Every adventure tells a different story</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col-12">
              <ul>
                <li>
                  <span>
                    <img data-src={img1} />
                    <em>Lorem</em>
                  </span>
                </li>
                <li>
                  <span>
                    <img data-src={img2} />
                    <em>Lorem</em>
                  </span>
                  <span>
                    <img data-src={img3} />
                    <em>Lorem</em>
                  </span>
                  <span>
                    <img data-src={img4} />
                    <em>Lorem</em>
                  </span>
                  <span>
                    <img data-src={img5} />
                    <em>Lorem</em>
                  </span>
                </li>
                <li>
                  <span>
                    <img data-src={img6} />
                    <em>Lorem</em>
                  </span>
                </li>
              </ul>
            </div>{/* cols */}
            <div className="col-12 btns center mb0">
              <Link to="/lifestyle" data-aos="fade-right">Explore More</Link>
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    </>
  );
}