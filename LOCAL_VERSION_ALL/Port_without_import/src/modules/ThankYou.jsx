import { Helmet } from "react-helmet-async";
import Banner from "./common/Banner";

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You</title>
        <meta name="description" content="This is Reviews page" />
      </Helmet>
      <Banner
        pageName="Thank You!" 
        pageText="Thanks for reaching out! I appreciate you taking the time to connect. I will review your message and get back to you shortly."
        otherImg="images/banners/home.jpg"
        showBreadcrumbs={false}
      />
    </>
  );
}
