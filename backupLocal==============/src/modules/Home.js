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
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12">
                  Lorem
                </div>
                <data className="col-12">
                  <figure>
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <data className="col-12">
                  <figure>
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>
                <data className="col-12">
                  <figure>
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <data className="col-12">
                  <figure>
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>
                <data className="col-12">
                  <figure>
                    <img src={ls1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </data>
              </div>
            </div>
            <data className="col-md-3">
              <figure>
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>
            <data className="col-md-3">
              <figure>
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>
            <data className="col-md-3">
              <figure>
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>
            <data className="col-md-3">
              <figure>
                <img src={ls1} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </data>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
