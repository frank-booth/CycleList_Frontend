import { useLocation, useNavigate } from 'react-router-dom'


const Rider = ({ songs }) => {
  let location = useLocation()
  let navigate = useNavigate()

  let rider = location.state.rider

  let riderSongs = songs?.filter(song => song.riderId === rider.id)

  const gotToAddSong = () => {
    navigate(`/riders/${rider.id}/addsong`, {state: {rider: rider}})
  }

  return (
    <div>
      <h1>{rider.userName}</h1>
      <h1>My Rides</h1>
      <button onClick={gotToAddSong}>Add Song</button>
      <div>
        { 
          riderSongs.map((song) => (
            <div key={song.id} className="song-card">
              <h3>'{song.title}'</h3>
              <p>{song.artist}</p>
              <p>{song.genre}</p>
              <p>{song.length}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}
export default Rider
