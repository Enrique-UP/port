import { Helmet } from "react-helmet-async";
import Banner from "./common/Banner";
export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews</title>
        <meta name="description" content="This is Reviews page" />
      </Helmet>
      <Banner
        pageName="Reviews Page" 
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
      />
    </>
  );
}
