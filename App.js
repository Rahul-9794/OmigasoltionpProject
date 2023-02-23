import React from 'react'
import Main from "./Components/Screen/Main"
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
import About from './Components/NavbarMenuPage/About';
import Shop from './Components/NavbarMenuPage/Shop';
import Wine from './Components/NavbarMenuPage/Wine';
import Trade from './Components/NavbarMenuPage/Trade';
import Offer from './Components/NavbarMenuPage/Offer';
import Contact from './Components/NavbarMenuPage/Contact';
import Ciger from './Components/NavbarMenuPage/Cigar';
import Navbar from './Components/Screen/Navbar';
import Footer from './Components/Screen/Footer';
import Wishlist from './Components/cart/Wishlist';

function App() {
  return (
    <>
    
    <Router>
   
      <Routes>
       
        <Route path="/" element={<Main/>}/>
        
        <Route path="/about" element={[ <Navbar/>,<About/>,<Footer/> ]}/>
        <Route path="/shop" element={[<Navbar/>,<Shop/>,<Footer/>]}/>
        <Route path="/wine" element={[<Navbar/>,<Wine/>,<Footer/>]}/>
        <Route path="/cigar" element={[<Navbar/>,<Ciger/>,<Footer/>]}/>
        <Route path="/trade" element={[<Navbar/>,<Trade/>,<Footer/>]}/>
        <Route path="/offer" element={[<Navbar/>,<Offer/>,<Footer/>]}/>
        <Route path="/contact" element={[<Navbar/>,<Contact/>,<Footer/>]}/>
        <Route path="/wishlist" element={[<Navbar/>,<Wishlist/>,<Footer/>]}/>
       
      </Routes>
    </Router>
    {/* */}

    </>
  )
}

export default App
