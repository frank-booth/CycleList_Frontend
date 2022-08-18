import NavLogo from '../assets/NavLogo.svg'
import { NavLink, Link } from 'react-router-dom'
import "../App.css"

const Nav = () => {
  return (
    <div className='NavBar'>
      <div className='NavLogo'>
        <div id="logo">
          <Link to="/">
          <img src={NavLogo} alt="cycle-list-logo" className="nav-logo" />
          </Link>
        </div>
      </div>
        <div className="NavLinks">
          <div className="links">
            <NavLink id="links" to="/">Home</NavLink>
            <NavLink  id="links" to="/songs">Songs</NavLink>
            <NavLink id="links"to="/about">About</NavLink>
          </div>

        </div>
    </div>
  )
}

export default Nav
