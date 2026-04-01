import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import "./assets/sass/style.scss";

import Header from './modules/common/Header';
import Footer from './modules/common/Footer';

import Home from './modules/home/Home';
import About from './modules/About';
import LifeStyle from './modules/lifeStyle/LifeStyle';
import Reviews from './modules/Reviews';
import Contact from './modules/contact/Contact';
import ThankYou from './modules/ThankYou';

import ScrollTop from './modules/common/ScrollTop';
import RenderTop from './modules/common/RenderTop';
import CommonScript from './modules/common/CommonScript';

export default function App() {
  return (
    <HashRouter>      
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/lifestyle" element={<LifeStyle />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>


      <Footer />
      <ScrollTop />
      <RenderTop />
      <CommonScript />
    </HashRouter>
  );
}
