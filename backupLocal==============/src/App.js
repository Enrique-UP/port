
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./sass/style.scss";

import RenderToTop from "./modules/common/RenderToTop";
import ScrollTop from "./modules/common/ScrollTop";
import Header from './modules/common/Header';
import Footer from './modules/common/Footer';

import Home from './modules/Home';
import LifeStyle from './modules/LifeStyle';
import AboutUs from './modules/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <RenderToTop>
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
        </Routes>

        <Footer />
        <ScrollTop />
      </RenderToTop>
    </BrowserRouter>
  );
}

export default App;
