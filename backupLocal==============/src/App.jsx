import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/sass/style.scss'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import LifeStyle from './pages/LifeStyle/LifeStyle'
import Contact from './pages/Contact/Contact'
import Header from './pages/Common/Header'

const App = () =>  {
  return (
    <>
      <HashRouter>
        <Header />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<LifeStyle />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
