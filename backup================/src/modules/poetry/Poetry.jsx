import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import PoetryData from "./PoetryData";

const PoetryTag = ({ word, poet }) => {
  const wordsArray = word.split(",");
  return (
    <article>
      <figcaption>
        <ul>
        {wordsArray.map((item, index) => (
          <li key={index}>
            {item.trim()}
            {index < wordsArray.length - 1 && (
              <>
                ,<br />
              </>
            )}
          </li>
        ))}
        </ul>
        <b>{poet}</b>
      </figcaption>
    </article>
  );
};
export default function Poetry() {
  return (
    <>
      <Helmet>
        <title>Poetry</title>
      </Helmet>
      <Banner
        pageName="Poetry" 
        pageText="Lorem ipsum dolor sit ameet."
      />
      <section className="section">
        <div className="container">
          <hgroup>
            <h2>Poetry</h2>
            <p>Lorem ipsum dolor sit ameet</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="poetry">
                {
                  PoetryData.map((val, ind) =>
                    val.words.map((word, i) => (
                      <PoetryTag 
                        key={i} 
                        word={word} 
                        poet={val.poet} 
                      />
                    ))
                  )
                }
              </div>
            </div>

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
