import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro" className="bgslider">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio" className="bgslider">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works" className="bgslider">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact" className="bgslider">Contact</a>
            </li>

        </ul>
    </div>
  )
}
