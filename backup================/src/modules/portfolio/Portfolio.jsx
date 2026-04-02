import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

import PortfolioData from "./PortfolioData";

const Temp = ({ date, site, link, about, img }) => {
  return (
    <article>
      <figcaption>
        <span>{date}</span>
        <a className="site" href={link} target="_blank" rel="noopener noreferrer">{site}</a>
        <p>{about}</p>
        <a className="link" href={link} target="_blank" rel="noopener noreferrer">See Live</a>
      </figcaption>
      <figure>
        <img src={img} alt="portfolio" />
      </figure>
    </article>
  );
};

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <Banner
        pageName="Lorem Page"
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
      />

      <section className="section">
        <div className="container">
          <hgroup>
            <h2>Lorem Page</h2>
            <p>Lorem ipsum dolor sit ameet</p>
          </hgroup>

          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="port">
                {PortfolioData.map((section, i) => (
                  <div className="portArea" key={i}>
                    <p className="hd">{section.hd}</p>
                    {section.items.map((item, j) => (
                      <Temp
                        key={j}
                        date={item.date}
                        site={item.site}
                        link={item.link}
                        about={item.about}
                        img={item.img}
                      />
                    ))}
                  </div>
                ))}
              </div>{/* port */}
            </div>{/* area-2 */}

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}