import { NavLink } from 'react-router-dom'
import Search from '../components/Search'

const Songs = ({ songs }) => {
  return (
    <div>
      <h1>Songs</h1>
      <Search />
      <NavLink to="/songs/:songId">Song/Routine Details</NavLink>
      <NavLink to="/songs/genres">Songs by Genre</NavLink>
      <NavLink to="/songs/routine-types">Songs by Routine Type</NavLink>
      <div></div>
    </div>
  )
}
export default Songs
