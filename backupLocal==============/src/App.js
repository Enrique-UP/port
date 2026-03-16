import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/style.scss";

import RenderTop from "./modules/common/RenderTop";
import ScrollTop from "./modules/common/ScrollTop";
import CommonScript from "./modules/common/CommonScript";
import Header from "./modules/common/Header";
import Footer from "./modules/common/Footer";

import Home from "./modules/Home";
import LifeStyle from "./modules/LifeStyle/LifeStyle";
import AboutUs from "./modules/AboutUs";
import ContactUs from "./modules/ContactUs";
import ThankYou from "./modules/ThankYou";

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
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>

      <Footer />
      <ScrollTop />

    </BrowserRouter>
  );
}

export default App;