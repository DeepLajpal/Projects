
const NavBar = ()=>{
   return <nav className='nav-container'>
        <div className="logo-container">
            <a href="#" >Deep Lajpal</a>
        </div>
        <div className='menu-container'>
          <a href="#" className='nav-item home'>Home</a>
          <a href="#" className='nav-item about'>About</a>
          <a href="#" className='nav-item contact'>Contact</a>
        </div>
        <div className="button-container">
            <a href="#">Let's talk</a>
        </div>
    
      </nav>
}
export default NavBar;