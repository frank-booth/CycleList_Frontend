import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Rider = ({ songs }) => {
  let location = useLocation()
  let navigate = useNavigate()

  let rider = location.state.rider

  let riderSongs = songs?.filter((song) => song.riderId === rider.id)

  const gotToAddSong = () => {
    navigate(`/riders/${rider.id}/addsong`, { state: { rider: rider } })
  }

  const editSong = (song) => {
    navigate(`/riders/${rider.id}/editsong`, { state: { song: song } })
  }

  return (
    <div>
      <h1>{rider.userName}</h1>
      <h1>My Rides</h1>
      <button onClick={gotToAddSong}>Add Song</button>
      <div>
        {riderSongs?.map((song) => (
          <div key={song.id} className="song-card">
            <h3>'{song.title}'</h3>
            <img src={song.songImage} />
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.length}</p>
            <button onClick={() => editSong(song)}>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Rider
