import { Link } from "react-router-dom";
import img1 from "../../assets/images/lifeStyle/home1.jpg";
import img2 from "../../assets/images/lifeStyle/home2.jpg";
import img3 from "../../assets/images/lifeStyle/home3.jpg";
import img4 from "../../assets/images/lifeStyle/home4.jpg";
import img5 from "../../assets/images/lifeStyle/home5.jpg";
import img6 from "../../assets/images/lifeStyle/home6.jpg";
import img7 from "../../assets/images/lifeStyle/home7.jpg";
import img8 from "../../assets/images/lifeStyle/home8.jpg";
import img9 from "../../assets/images/lifeStyle/home9.jpg";

export default function LifestyleHome() {
  return (
    <>
      <section className="section lifeStyle colors b1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>Gallery</h2>
                <p>Lorem ipsum dolor sit ameet</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col-12 space">
              <div className="row">
                <div class="col-xl-6 setHeight">
                  <div class="row">
                    <div class="col-sm-6 col-xl-12 df">
                      <div class="outlineBox">
                        <b>Heading</b>
                        <span>
                          Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet.
                        </span>
                      </div>
                    </div>
                    <article class="col-sm-6 col-xl-12">
                      <figure>
                        <img src={img1} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                  </div>{/* row */}
                </div>{/* cols */}
                <div class="col-xl-6 setHeight">
                  <div class="row">
                    <article class="col-6 col-md-3 col-xl-6">
                      <figure>
                        <img src={img2} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                    <article class="col-6 col-md-3 col-xl-6">
                      <figure>
                        <img src={img3} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                    <article class="col-6 col-md-3 col-xl-6">
                      <figure>
                        <img src={img4} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                    <article class="col-6 col-md-3 col-xl-6">
                      <figure>
                        <img src={img5} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                  </div>{/* row */}
                </div>{/* cols */}
                <article class="col-6 col-md-3">
                  <figure>
                    <img src={img6} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                  </figure>
                </article>
                <article class="col-6 col-md-3">
                  <figure>
                    <img src={img7} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                  </figure>
                </article>
                <article class="col-6 col-md-3">
                  <figure>
                    <img src={img8} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                  </figure>
                </article>
                <article class="col-6 col-md-3">
                  <figure>
                    <img src={img9} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                  </figure>
                </article>
              </div>{/* row */}
            </div>{/* cols */}
            <div class="col-12 btns center mb0">
              <Link to="/lifestyle">Explore More</Link>
            </div>{/* cols */}
          </div>{/* row */}          
        </div>{/* container */}
      </section>
    </>
  );
}
