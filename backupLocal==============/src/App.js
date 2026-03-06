import { HashRouter, Routes, Route } from "react-router-dom";

import "./sass/style.scss";

import RenderTop from "./modules/common/RenderTop";
import Scrolltotop from "./modules/common/Scrolltotop";
import CommonScript from "./modules/common/CommonScript";
import Header from "./modules/common/Header";
import Footer from "./modules/common/Footer";

import Home from "./modules/Home";
import LifeStyle from "./modules/LifeStyle";
import AboutUs from "./modules/AboutUs";
import ContactUs from "./modules/ContactUs";

function App() {
  return (
    <HashRouter>
      <RenderTop />
      <CommonScript />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/lifestyle" element={<LifeStyle />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
      <Scrolltotop />

    </HashRouter>
  );
}

export default App;