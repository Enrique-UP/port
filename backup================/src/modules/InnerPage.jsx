import { Helmet } from "react-helmet-async";
import Banner from "./common/Banner";
import LeftSidebar from "./common/LeftSidebar";
import RightSidebar from "./common/RightSidebar";
import Slider from "./home/Slider";

export default function InnerPage() {
  return (
    <>
      <Helmet>
        <title>InnerPage</title>
        <meta name="description" content="This is Inner page" />
      </Helmet>
      <Slider />
      <Banner
        pageName="Inner Page"
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
      />
      <section className="section">
        <div className="container">
          <hgroup>
            <h2>Inner <span>Page</span></h2>
            <p>Lorem ipsum dolor sit ameet</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              Lorem
            </div>{/* area-2 */}

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
