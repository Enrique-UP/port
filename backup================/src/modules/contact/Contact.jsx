import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="This is contact page" />
      </Helmet>
      <Banner
        pageName="Contact Us Page" 
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
      />
    </>
  );
}