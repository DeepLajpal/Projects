import Contact from './Components/contact/Contact';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Topbar from "./Components/topbar/Topbar";
import Works from './Components/works/Works';
import './App.css';
function App() {
  return (
    <div className="App">
       <Topbar/>
       <div className="section">
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
