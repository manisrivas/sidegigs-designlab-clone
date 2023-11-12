import styles from "./style";
import { Footer, Navbar } from "./components";
import Hero  from "./pages/Hero";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/About-us"
import Products from "./pages/products";
import Webdev from "./pages/webdev";
import Photography from "./pages/photography"
import Seo from "./pages/seo";
import Social from "./pages/social"
import Brand from "./pages/brand"
import Graphic from "./pages/graphics"
import Mobile from "./pages/mobile";
import Uiux from "./pages/uiux";
import Career from "./pages/career"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (

<div className="relative min-h-screen">

  <Router>
  
    <Navbar/>
    <Routes>
          <Route path='/' element={<Hero />} />
          <Route path="/web-dev" element={<Webdev/>}/>
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/about-us' element={<Aboutus/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/seo' element={<Seo/>} />
          <Route path='/social' element={<Social/>} />
          <Route path='/brand' element={<Brand/>} />
          <Route path='/graphic' element={<Graphic/>} />
          <Route path='/mobile' element={<Mobile/>} />
          <Route path='/uiux' element={<Uiux/>} />
          <Route path='/career' element={<Career/>} />


          
        </Routes>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth} `}>
        
        <Footer />
      </div>
    </div>
  
  </Router>
</div>
);

export default App;
