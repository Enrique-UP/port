import {Helmet} from "react-helmet";
import Banner from "./common/Banner";
import LifeStyleHome from "./LifeStyle/LifeStyleHome";



function Home() {
  return (
    <>
      <Helmet>
          <title>Home</title>
      </Helmet>
      <Banner
        pageName="Welcome to our website" 
        pageText="Home page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
        showBreadcrumbs={false}
      />
      <LifeStyleHome />
    </>
  );
}

export default Home;
