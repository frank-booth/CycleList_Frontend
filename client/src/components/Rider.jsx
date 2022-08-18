import { useLocation, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { BASE_URL } from '../globals'

const Rider = ({ songs }) => {
  let location = useLocation()
  let navigate = useNavigate()

  let rider = location.state.rider

  let riderSongs = songs?.filter((song) => song.riderId === rider.id)

  const addSong = () => {
    navigate(`/riders/${rider.id}/addsong`, { state: { rider: rider } })
  }

  const editSong = (song) => {
    navigate(`/riders/${rider.id}/editsong`, { state: { song: song } })
  }

  const deleteSong = async (song) => {
    await axios.delete(`${BASE_URL}/api/songs/${song.id}`)
    navigate(`/riders/${rider.id}`, { state: { rider: rider } })
    window.location.reload(false)
  }

  return (
    <div>

      <section className='hero-section'>
        <h1>Welcome</h1>
        <h2>{rider.userName}</h2>
        <button onClick={addSong}>Add Song</button>
      </section>
      <div className='page-title'>
        <h3>My Songs & Routine</h3>
      </div>
      
      <div className="list-container">

        <div className="column-headers">
          <h4>Song Image</h4>
          <h4>Title/Artist</h4>
          <h4>Genre</h4>
          <h4>Length</h4>
          <h4>Category</h4>
          <h4>Routine</h4>
          <h4>Edit/Delete</h4>
        </div>
        <div className="songs-container">
          {riderSongs?.map((song) => (
            <div key={song.id} className="song-card">
              <img className="song-image" src={song.songImage} />
              <div className="artist-info">
                <h3>'{song.title}'</h3>
                <p>{song.artist}</p>
              </div>
              <p>{song.genre}</p>

              <p>{song.length}</p>
              <p>{song.Routine?.category}</p>
              <p>{song.Routine?.content}</p>
              <div className="song-card-buttons">
                <button onClick={() => editSong(song)}>Edit</button>
                <button onClick={() => deleteSong(song)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Rider
