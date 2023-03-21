import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import "./app.scss"
import { useState } from 'react'
import Menu from './components/menu/Menu'
import Particles from './components/particles/Particles'

function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Particles id='tsparticles' />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
