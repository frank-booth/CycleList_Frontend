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
      <div className="songs-container">
        {songs.map((song) => (
          <div key={song._id} className="song-card">
            <h3>'{song.title}'</h3>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.length}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Songs
