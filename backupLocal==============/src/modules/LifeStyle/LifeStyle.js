import { Helmet } from "react-helmet";
import Banner from "../common/Banner";
import LifestyleTag from "./LifestyleTag";
import LifeStyleData from "./LifestyleData";

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
                <h2>Lorem <span>ipsum</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col-12 partition">
              {
                LifeStyleData.map((val, ind) => {
                  return <LifestyleTag key={ind} dp={val.dp} />
                })
              }
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    </>
  );
}

export default Lifestyle;
