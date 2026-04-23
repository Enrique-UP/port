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

import img1 from "../../assets/images/team/t1.jpg";
import img2 from "../../assets/images/team/t2.jpg";
import img3 from "../../assets/images/team/t3.jpg";
import img4 from "../../assets/images/team/t4.jpg";

const BpData = [
    {
        img: img1,
        web: "www.loremipsumdolor.com",
        link: "https://www.loremipsumdolor.com",
        date: "01-00-0000",
        type:"Web Type1",
        note:"Note here lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi.",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed. Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed. Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed."
    },
    {
        img: img2,
        web: "www.loremipsumdolorsitameetlorem.com",
        link: "",
        date: "02-00-0000",
        type:"Web Type2",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed."
    },
    {
        img: img3,
        web: "www.loremipsumdolor.com",
        link: "https://www.loremipsumdolor.com",
        date: "03-00-0000",
        type:"Web Type3",
        note:"Note here lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi.",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed. Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed. Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed."
    },
    {
        img: img4,
        web: "www.loremipsumdolorsitameetlorem.com",
        link: null,
        date: "04-00-0000",
        type:"Web Type4",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed."
    },
    {
        img: img1,
        web: "www.loremipsumdolor.com",
        date: "05-00-0000",
        type:"Web Type5",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed. Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed. Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed."
    },
    {
        img: img2,
        web: "www.loremipsumdolorsitameetlorem.com",
        date: "06-00-0000",
        type:"Web Type6",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci harum dolores similique provident officiis vitae in iusto recusandae fuga commodi sit facere temporibus amet aliquam consequuntur distinctio voluptatem nihil optio rerum aliquid quos minima fugiat quisquam quam eum atque voluptates dolorum culpa iusto doloremque laudantium sapiente vero iste praesentium sed."
    },
];

function BpTag({ img, web, link, date, type, details, index, setLightboxOpen, setCurrentIndex }) {
  return (
    <div className="col-12">
      <ul className="bpArea">
        <li className="img">
          <img src={img} alt="" />
        </li>

        <li className="text">
          <p className="hd">{web}</p>
          <p className="about">
            <b>About the Project</b>
            <span>Website Type: <em>{type}</em></span>
          </p>
          <p className="cnt">{details}</p>
        </li>

        <li className="btnText">
          <article>
            <div>
              <span>{date}</span>

              <b
                onClick={() => {
                  setCurrentIndex(index);
                  setLightboxOpen(true);
                }}
              >
                View Template
              </b>

              <a
                onClick={() => {
                  if (link) {
                    window.open(link, "_blank");
                  } else {
                    alert("This website is not available now");
                  }
                }}
              >
                View Live
              </a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default function BrandingProjects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = BpData.map(item => ({
    src: item.img,
    description: item.web
  }));

  return (
    <>
      <section className="section bp colors b1" id="bp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h3>Top <span>Projects</span></h3>
                <p>Lorem ipsum dolor sit ameet</p>
              </hgroup>
            </div>
            <div className="col-12">
              <div className="outlineBox dk">asdfasdf</div>
            </div>

            {BpData.map((item, index) => (
              <BpTag
                key={index}
                index={index}
                setLightboxOpen={setLightboxOpen}
                setCurrentIndex={setCurrentIndex}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        slides={slides}
        open={lightboxOpen}
        index={currentIndex}
        close={() => setLightboxOpen(false)}
        plugins={[Zoom, Thumbnails, Fullscreen, Slideshow, Counter, Captions]}
        zoom={{ maxZoomPixelRatio: 3 }}
      />
    </>
  );
}