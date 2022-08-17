import { NavLink } from 'react-router-dom'
import RiderSongList from './RiderSongList'

const Rider = () => {
  return (
    <div>
      <h1>My Rides</h1>
      <NavLink to="/riders/:riderId/addsong">Add Song</NavLink>
      <RiderSongList />
    </div>
  )
}
export default Rider
