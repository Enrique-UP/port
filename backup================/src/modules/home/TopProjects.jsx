import { useState, useEffect } from "react";

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

const TpData = [
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

function TpTag(props) {
    const isActive = props.activeIndex === props.index;
    return (
        <div className="col-sm-6 col-lg-4">
            <div className={`tpArea ${isActive ? "active" : ""}`}>
                <div className="top">
                    <img data-src={props.img} alt="" />
                    <span className="date">{props.date}</span>
                    {props.note && <div className="notes">{props.note}</div>}
                    <span
                        className="detail"
                        onClick={() =>
                            props.setActiveIndex(
                                props.activeIndex === props.index
                                    ? null
                                    : props.index
                            )
                        }
                    >View Details</span>
                    <span className="type">{props.type}</span>
                    <div className="details">
                        <div className="headClose">
                            <b>About the Website</b>
                            <i
                                className="icon"
                                onClick={() => props.setActiveIndex(null)}
                            >&#xa018;</i>
                        </div>
                        <p>{props.details}</p>
                    </div>
                </div>
                <div className="bottom">
                    <i
                        className="icon"
                        onClick={() => {
                            props.setCurrentIndex(props.index);
                            props.setLightboxOpen(true);
                        }}
                    >&#xa095;</i>
                    <a href={`https://${props.web}`} target="_blank" rel="noreferrer">{props.web}</a>
                    <i
                        className="icon"
                        onClick={() => {
                            if (props.link) {
                                window.open(props.link, "_blank");
                            } else {
                                alert("This website is not available now");
                            }
                        }}
                    >&#xa038;</i>
                </div>
            </div>
        </div>
    );
}

export default function TopProjects() {
    const [activeIndex, setActiveIndex] = useState(null);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const allImages = TpData.map(item => ({
        src: item.img,
        // title: item.web,
        description: item.web
    }));

    useEffect(() => {
        function handleClickOutside(e) {
            if (!e.target.closest(".tpArea")) {
                setActiveIndex(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <section className="section tp b1" id="tp">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hgroup>
                                <h3>Top <span>Projects</span></h3>
                                <p>Lorem ipsum dolor sit ameet</p>
                            </hgroup>
                        </div>
                        {TpData.map((val, ind) => (
                            <TpTag
                                key={ind}
                                index={ind}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                setLightboxOpen={setLightboxOpen}
                                setCurrentIndex={setCurrentIndex}
                                {...val}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Lightbox
                slides={allImages}
                open={lightboxOpen}
                index={currentIndex}
                close={() => setLightboxOpen(false)}
                plugins={[
                    Zoom,
                    Thumbnails,
                    Fullscreen,
                    Slideshow,
                    Counter,
                    Captions
                ]}
                zoom={{ maxZoomPixelRatio: 3 }}
            />
        </>
    );
}