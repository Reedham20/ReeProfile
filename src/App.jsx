import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfoilio/Portfolio"
import Works from "./components/works/Works"
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import useRightClickMenu from "./hooks/useRightClickMenu";
import RightMenu from "./components/rightmenu/RightMenu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const {x,y,showMenu} = useRightClickMenu();
  return (
    <div className="app">
      <RightMenu x={x} y={y} showMenu={showMenu}/>
      <Topbar menuOpen={menuOpen} setMenuOpen= {setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen= {setMenuOpen}/>
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