import ls1 from "../../images/lifeStyle/1.jpg";
import { Link } from "react-router-dom";

function LifeStyleHome() {
  return (
    <>
      <section className="section lifeStyle colors">
        <div className="container">
          <div className="row"> 
            <div className="col-12">
              <hgroup> 
                <h2>Lorem <span>ipsum</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col-md-6 setHeight">
              <div className="row">
                <div className="col-12 df">
                  <div className="outlineBox">
                    <b>Heading</b>
                    <span>Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet.</span>
                  </div>
                </div>{/* cols */}
                <data className="col-12">
                  <figure>
                    <img className="lazy" data-src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
              </div>{/* row */}
            </div>{/* cols */}
            <div className="col-md-6 setHeight">
              <div className="row">
                <data className="col-6">
                  <figure>
                    <img className="lazy" data-src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
                <data className="col-6">
                  <figure>
                    <img className="lazy" data-src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
                <data className="col-6">
                  <figure>
                    <img className="lazy" data-src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
                <data className="col-6">
                  <figure>
                    <img className="lazy" data-src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
              </div>{/* row */}
            </div>{/* cols */}
            <data className="col-6 col-md-3">
              <figure>
                <img className="lazy" data-src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* cols */}
            <data className="col-6 col-md-3">
              <figure>
                <img className="lazy" data-src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* <!--cols--> */}
            <data className="col-6 col-md-3">
              <figure>
                <img className="lazy" data-src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* cols */}
            <data className="col-6 col-md-3">
              <figure>
                <img className="lazy" data-src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* cols */}
            <div className="col-12 btns center mb0">
              <Link to="/lifestyle">Explore More</Link>
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    </>
  );
}

export default LifeStyleHome;
