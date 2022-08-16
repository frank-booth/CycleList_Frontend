import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section className='page-home'>
      <div>
        <h1>this is the homepage.</h1>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/riders/:riderId">My Rides</NavLink>
      </div>
    </section>
  )
}

export default Home
