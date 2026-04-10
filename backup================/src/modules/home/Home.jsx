import { Helmet } from "react-helmet-async";
import HomeBanner from "../../assets/images/banners/home.jpg";
import Banner from "../common/Banner";
import Welcome from "./Welcome";
import AboutHome from "../about/AboutHome";
import LifestyleHome from "../lifeStyle/LifeStyleHome";
import Childhood from "./Childhood";
import Ads1 from "../ads/Ads1";
import Ads2 from "../ads/Ads2";
import Team from "./Team";
import Education from "./Education";
import Experience from "./Experience";
import Know from "./Know";
import Ads3 from "../ads/Ads3";
import Wcu from "./Wcu";
import Ads4 from "../ads/Ads4";



export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is home page" />
      </Helmet>
      <Banner
        pageName="Welcome to our website" 
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
        isHome={true}
        otherImg={HomeBanner}
        showBreadcrumbs={false}
      />
      <Welcome />
      <AboutHome />
      <Experience />
      <Education />
      <Know />
      <LifestyleHome />
      <Ads4 />
      <Team />
      <Ads2 />
      <Wcu /> 
      <Ads1 />     
      <Childhood />
      <Ads3 />
    </>
  );
}