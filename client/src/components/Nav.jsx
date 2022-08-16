import NavLogo from '../assets/NavLogo.svg'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navBar'>
      <div className='navContent'>
        <div id="logo">

          <Link to="/">
          <img src={NavLogo} alt="cycle-list-logo" className="nav-logo" />
          </Link>
        </div>
        <div className="nav-links">
          <div className="links">
            <NavLink id="links" to="/">Home</NavLink>
            <NavLink  id="links" to="/songs">Songs</NavLink>
            <NavLink id="links"to="/about">About</NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Nav
