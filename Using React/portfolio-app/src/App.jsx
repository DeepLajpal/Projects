import Contact from './Components/contact/Contact';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Topbar from "./Components/topbar/Topbar";
import Works from './Components/works/Works';
import Menu from './Components/menu/Menu';
import './App.scss';
import { useState } from 'react';
function App() {

  const[menuOpen,setMenuOpen]= useState(false);
  return (
    <div className="App">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
       </div>
    </div>
  );
}

export default App;

