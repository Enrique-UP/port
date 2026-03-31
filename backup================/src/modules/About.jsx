import { Helmet } from "react-helmet-async";
import Banner from "./common/Banner";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="This is about page" />
      </Helmet>
      <Banner
        pageName="About Us Page" 
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
      />
    </>
  );
}
