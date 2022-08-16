import NavLogo from '../assets/NavLogo.svg'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navBar'>
      <div className='navContent'>
        <div id="logo">
          <img src={NavLogo} alt="cycle-list-logo" />
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/songs">Songs</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Nav
