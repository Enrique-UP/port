import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import HomeBanner from "../../assets/images/banners/home.jpg";
import Banner from "../common/Banner";
import Welcome from "./Welcome";
// import MyTypewriter from "./MyTypewriter";
import MyPage from "../typeWriter/MyPage";
import { TypeWriter } from "../typeWriter/TypeWriter";

const words1 = [
  { text: "Hello World", className: "one" },
  { text: "Welcome to India", className: "two" }
];

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
      <section className="section">
        <div className="container">
          <hgroup>
            {/* <MyTypewriter /> */}
            <h3><TypeWriter words={words1} /></h3>
            {/* <MyPage /> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis omnis</p>
          </hgroup>
        </div>
      </section>
    </>
  );
}