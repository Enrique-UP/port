import {Helmet} from "react-helmet";

import ls1 from "../images/lifeStyle/ls-1.jpg";

function Home() {
  return (
    <>
      <Helmet>
          <title>Home</title>
      </Helmet>
      <section className="section banner">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6 col-xl-5">
              <h1 className="hd">Lorem ipsum dolor sit amet consectetur adipisicing</h1>
              <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam.</p>
              <div className="btns">
                <a href="#" target="_blank">
                  <i className="icon">&#xa001;</i>
                  <span>0000000000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    <img src={ls1} />
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
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
                <data className="col-6">
                  <figure>
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
                <data className="col-6">
                  <figure>
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>{/* cols */}
                <data className="col-6">
                  <figure>
                    <img src={ls1} />
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
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* cols */}
            <data className="col-6 col-md-3">
              <figure>
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* <!--cols--> */}
            <data className="col-6 col-md-3">
              <figure>
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* cols */}
            <data className="col-6 col-md-3">
              <figure>
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    </>
  );
}

export default Home;
