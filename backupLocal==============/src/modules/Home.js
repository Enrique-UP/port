import {Helmet} from "react-helmet";
import CounterNum from './common/CounterNum';
import Banner from "./common/Banner";
import HomeBanner from "../images/banners/home.jpg";
import LifeStyleHome from "./LifeStyle/LifeStyleHome";
import { Counter } from "yet-another-react-lightbox/plugins";



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
      <LifeStyleHome />
      {/* <CounterNum /> */}
    </>
  );
}

export default Home;
