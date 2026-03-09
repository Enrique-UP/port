import { Helmet } from "react-helmet";
import Banner from "../common/Banner";
import LifeStyleData from "./LifestyleData";

const r = require.context("../../images/lifeStyle", false, /./);
const LifeStyleImages = r.keys().map(r);

function Lifestyle() {
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
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>
                  Lorem <span>ipsum</span>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error</p>
              </hgroup>
            </div>

            <div className="col-12 partition">
              {[...LifeStyleData].reverse().map((val, ind) => {
                const imgIndex = LifeStyleData.length - ind - 1;

                return (
                  <data key={ind}>
                    <figure>
                      <img src={LifeStyleImages[imgIndex]} alt={val.hd} />
                      <figcaption>
                        <b>{val.hd}</b>
                        <span>{val.txt}</span>
                      </figcaption>
                    </figure>
                  </data>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lifestyle;