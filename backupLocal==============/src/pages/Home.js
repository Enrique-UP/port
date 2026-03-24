import {Helmet} from "react-helmet";
import { useEffect } from "react";
import Banner from "./modules/common/Banner";
import HomeBanner from "../images/banners/home.jpg";
import LifeStyleHome from "./modules/LifeStyle/LifeStyleHome";
import { Counter } from "yet-another-react-lightbox/plugins";
import Childhood from "./modules/AboutUs/Childhood";
import AboutUsHome from "./modules/AboutUs/AboutUsHome";
import Ads1 from "./modules/Ads/Ads1";
import Ads2 from "./modules/Ads/Ads2";



function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner
        pageName="Welcome to our website" 
        pageText="Home page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
        otherImg={HomeBanner}
        showBreadcrumbs={false}
      />
      <section className="welcome">
        <div className="container">
          <div className="fw">
            <p className="head">
              Loremip
              <span>Lm Ip Dolorst</span>
            </p>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maiores quis iste architecto asperiores enim tenetur, sit, quos voluptate id repudiandae ab veritatis hic perferendis porro! Voluptatum recusandae delectus vero iusto nisi laboriosam iste praesentium officia commodi ratione doloremque pariatur impedit minus, quaerat a ut perspiciatis, saepe est eaque id cumque modi maxime fugiat dolores. Assumenda illo architecto, natus unde ullam provident, repellat exercitationem voluptas officia fuga reiciendis dignissimos at mollitia aliquam perspiciatis temporibus eum consequuntur iste!</p>
          </div>{/* fw */}
        </div>{/* container */}
      </section>
      <ul className="colorsLine reverse">
        <li></li>
      </ul>
      <AboutUsHome />
      <Ads2 />
      <LifeStyleHome />
      <Childhood />
      <Ads1 />
    </>
  );
}

export default Home;
