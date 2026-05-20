import { Link } from "react-router-dom";

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
                    <img data-src="images/AdventureMoments/1.jpg" />
                    <em>Lorem</em>
                  </span>
                </li>
                <li>
                  <span>
                    <img data-src="images/AdventureMoments/2.jpg" />
                    <em>Lorem</em>
                  </span>
                  <span>
                    <img data-src="images/AdventureMoments/3.jpg" />
                    <em>Lorem</em>
                  </span>
                  <span>
                    <img data-src="images/AdventureMoments/4.jpg" />
                    <em>Lorem</em>
                  </span>
                  <span>
                    <img data-src="images/AdventureMoments/5.jpg" />
                    <em>Lorem</em>
                  </span>
                </li>
                <li>
                  <span>
                    <img data-src="images/AdventureMoments/6.jpg" />
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