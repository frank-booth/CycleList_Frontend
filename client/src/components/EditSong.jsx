import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditSong = () => {
  let location = useLocation()
  let navigate = useNavigate()

  let song = location.state.song

  const initialStateSong = {
    title: `${song.title}`,
    artist: `${song.artist}`,
    genre: `${song.genre}`,
    length: `${song.length}`,
    songImage: `${song.songImage}`
  }

  const [songFormState, setSongFormState] = useState(initialStateSong)

  const handleChangeSong = (event) => {
    setSongFormState({
      ...songFormState,
      [event.target.id]: event.target.value
    })
  }
  console.log(songFormState)

  const handleSubmitSong = async (song) => {
    let res = await axios.put(`${BASE_URL}/api/songs/${song.id}`, songFormState)
    setSongFormState(initialStateSong)
    navigate(-1)
  }

  return (
    <div>
      <h1>Add songs here</h1>
      <div className="form-container">
        <form onSubmit={handleSubmitSong}>
          <input
            id="title"
            type="text"
            onChange={handleChangeSong}
            value={songFormState.title}
            placeholder="title"
          />
          <input
            id="artist"
            type="text"
            onChange={handleChangeSong}
            value={songFormState.artist}
            placeholder="artist"
          />
          <select
            id="genre"
            onChange={handleChangeSong}
            value={songFormState.genre}
          >
            <option value="">Select Genre</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Hip-hop">Hip-hop</option>
            <option value="Country">Country</option>
            <option value="EDM">EDM</option>
            <option value="Other">Other</option>
          </select>
          <input
            id="length"
            type="text"
            onChange={handleChangeSong}
            value={songFormState.length}
            placeholder="length"
          />
          <input
            id="songImage"
            type="text"
            onChange={handleChangeSong}
            value={songFormState.songImage}
            placeholder="song image"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditSong