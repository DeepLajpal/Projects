import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  
    const closeMenu =()=>{
        setMenuOpen(false);
    }

  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li><a href="#intro" onClick={closeMenu}>Intro</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#works" onClick={closeMenu}>Works</a></li>
            <li><a href="#testimonial" onClick={closeMenu}>Testimonial</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
    </div>
  )
}
