import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import "./assets/sass/style.scss"

import Header from './modules/common/Header';
import Footer from './modules/common/Footer';

import Home from './modules/Home';
import About from './modules/About';
import Contact from './modules/Contact';
import Reviews from './modules/Reviews';
import ThankYou from './modules/ThankYou';

export default function App() {
  return (
    <HashRouter>      
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>


      <Footer />
    </HashRouter>
  );
}
