import { NavLink } from 'react-router-dom'
import HomeBg from '../assets/HomeBg.png'
import CIcon from '../assets/C.svg'

const Home = () => {
  return (
    <section className="page-home">
      <div className="cta">
        <img src={CIcon} alt="c-logo-icon" className="c-icon" />
        <h1>Welcome to CycleList</h1>
        <NavLink className="cta-links" to="/signup">
          Sign Up
        </NavLink>
        <NavLink className="cta-links" to="/login">
          Login
        </NavLink>
      </div>
    </section>
  )
}

export default Home
