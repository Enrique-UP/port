import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

import PortfolioData from "./PortfolioData";

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

/* ================= IMAGE IMPORT ================= */

const images = import.meta.glob(
  "/src/assets/images/portfolio/*/*.jpg",
  { eager: true, import: "default" }
);

const imageMap = {};

Object.entries(images).forEach(([path, value]) => {
  const parts = path.split("/");
  const folder = parts[parts.length - 2];
  const file = parts[parts.length - 1].replace(".jpg", "");

  imageMap[`${folder}-${file}`] = value;
});

const getImage = (folder, name, domain) =>
  imageMap[`${folder}-${name}_${domain}`] || "";

/* ================= TEMPLATE ================= */

const Temp = ({ date, site, link, about, note, img, onClick, status }) => {
  const displaySite = `www.${site}`;

  return (
    <article>
      <figcaption>
        <span>{date}</span>

        <a
          className="site"
          {...(status && {
            href: link,
            target: "_blank",
            rel: "noreferrer",
          })}
          data-site={displaySite}
        ></a>

        <p className={about}></p>

        {note && <p className="notes"></p>}

        <div className="links">
          {status && link && (
            <a href={link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          <span onClick={onClick}>View Template</span>
        </div>
      </figcaption>

      <figure>
        <img src={img} onClick={onClick} />
      </figure>
    </article>
  );
};

/* ================= MAIN ================= */

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = PortfolioData.flatMap((section) =>
    section.items.map((item) => ({
      src: getImage(section.folderName, item.name, item.domain),
    }))
  );

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <Banner
        pageName="Portfolio"
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />

      <section className="section">
        <div className="container">
          <hgroup>
            <h2>
              Lorem <span>Page</span>
            </h2>
            <p>Lorem ipsum dolor sit amet</p>
          </hgroup>

          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="port">
                {PortfolioData.map((section, i) => (
                  <div className="portArea" key={i}>
                    <p className="hd">
                      <span data-hd={section.hd}></span>
                    </p>

                    {section.items.map((item, j) => {
                      const { date, name, domain, link, note, status } = item;

                      const site = `${name}.${domain}`;
                      const about = `${name}_text`;
                      const fullLink = link?.startsWith("http")
                        ? link
                        : `https://${site}`;

                      const index =
                        PortfolioData.slice(0, i)
                          .flatMap((s) => s.items).length + j;

                      return (
                        <Temp
                          key={j}
                          date={date}
                          site={site}
                          link={fullLink}
                          about={about}
                          note={note}
                          status={status}
                          img={getImage(section.folderName, name, domain)}
                          onClick={() => {
                            setCurrentIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <RightSidebar />
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      {lightboxOpen && (
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
            Captions,
          ]}
        />
      )}
    </>
  );
}