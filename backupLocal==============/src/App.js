import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/style.scss";

import RenderTop from "./pages/modules/common/RenderTop";
import ScrollTop from "./pages/modules/common/ScrollTop";
import CommonScript from "./pages/modules/common/CommonScript";
import Header from "./pages/modules/common/Header";
import Footer from "./pages/modules/common/Footer";

import Home from "./pages/Home";
import LifeStyle from "./pages/modules/LifeStyle/LifeStyle";
import AboutUs from "./pages/modules/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";
import InnerPage from "./pages/InnerPage";

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
        <Route path="/inner" element={<InnerPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>

      <Footer />
      <ScrollTop />

    </BrowserRouter>
  );
}

export default App;