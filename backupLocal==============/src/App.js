import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/style.scss";

import RenderTop from "./pages/modules/Common/RenderTop";
import ScrollTop from "./pages/modules/Common/ScrollTop";
import CommonScript from "./pages/modules/Common/CommonScript";
import Header from "./pages/modules/Common/Header";
import Footer from "./pages/modules/Common/Footer";

import Home from "./pages/Home";
import LifeStyle from "./pages/modules/LifeStyle/LifeStyle";
import AboutUs from "./pages/modules/AboutUs/AboutUs";
import ContactUs from "./pages/modules/ContactUs/ContactUs";
import Reviews from "./pages/Reviews";
import InnerPage from "./pages/InnerPage";
import Poetry from "./pages/modules/Poetry/Poetry";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <RenderTop />
      <CommonScript />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/lifestyle" element={<LifeStyle />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/inner" element={<InnerPage />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>

      <Footer />
      <ScrollTop />

    </BrowserRouter>
  );
}

export default App;