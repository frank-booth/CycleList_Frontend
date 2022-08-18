import NavLogo from '../assets/NavLogo.svg'
import { NavLink, Link } from 'react-router-dom'
import "../App.css"

const Nav = ({riders}) => {
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
            <NavLink id='links' to="/riders/4">My Rides</NavLink>
            <NavLink  id="links" to="/songs/genre">Genre</NavLink>
            <NavLink  id="links" to="/songs/routine">Routine</NavLink>
            <NavLink id="links"to="/about">About</NavLink>
          </div>

        </div>
    </div>
  )
}

export default Nav
