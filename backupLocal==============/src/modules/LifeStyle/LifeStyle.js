import { Helmet } from "react-helmet";
import Banner from "../common/Banner";
import LifeStyleData from "./LifestyleData";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";

const ImagePlaceholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function Lifestyle() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // simple slides mapping
  const slides = LifeStyleData.map((item, i) => ({
    src: require(`../../images/lifeStyle/${LifeStyleData.length - i}.jpg`),
    ttl: item.place,
    date: item.date,
    description: item.place + " & " + item.date
  }));

  return (
    <>
      <Helmet>
        <title>Life Style</title>
      </Helmet>

      <Banner
        pageName="Life Style"
        pageText="Life Style page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
      />

      <section className="section lifeStyle colors">
        <div className="container">
          <hgroup>
            <h2>Lorem <span>ipsum</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error</p>
          </hgroup>
          <div className="row">
            <div className="col-12 partition">
              {slides.map((val, ind) => (
                <data key={ind} className="galleryItem">
                  <figure>
                    <img
                      src={ImagePlaceholder}
                      data-src={val.src}
                      alt={val.ttl}
                      onClick={() => {
                        setIndex(ind);
                        setOpen(true);
                      }}
                    />
                    <figcaption>
                      <b>{val.ttl} {ind + 1}</b>
                      <span>{val.date}</span>
                    </figcaption>
                  </figure>
                </data>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[
          Zoom,
          Thumbnails,
          Fullscreen,
          Slideshow,
          Counter,
          Captions
        ]}
        captions={{ descriptionTextAlign: "center" }}
      />
    </>
  );
}

export default Lifestyle;