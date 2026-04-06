import { Helmet } from "react-helmet-async";
import HomeBanner from "../../assets/images/banners/home.jpg";
import Banner from "../common/Banner";
import Welcome from "./Welcome";
import AboutHome from "../about/AboutHome";

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
    </>
  );
}