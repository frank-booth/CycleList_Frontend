import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import CIcon from '../assets/C.svg'

const EditRoutine = ({ getAllSongs }) => {
  let navigate = useNavigate()
  let location = useLocation()
  let song = location.state.song
  const initialStateRoutine = {
    content: `${song.Routine?.content}`,
    category: `${song.Routine?.category}`
  }

  const [routineFormState, setRoutineFormState] = useState(initialStateRoutine)

  const handleChangeRoutine = (event) => {
    setRoutineFormState({
      ...routineFormState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmitRoutine = async (event) => {
    event.preventDefault()
    await axios.put(
      `${BASE_URL}/api/routines/${song.Routine?.id}`,
      routineFormState
    )
    setRoutineFormState(initialStateRoutine)
    getAllSongs()
    navigate(-2)
  }

  return (
    <div className="main-container">
      <img src={CIcon} alt="c-logo-icon" className="c-icon" />
      <h1>Edit Routine</h1>
      <div className="form-container">
        <form onSubmit={handleSubmitRoutine}>
          <input
            id="content"
            type="text"
            onChange={handleChangeRoutine}
            value={routineFormState.content}
            placeholder="Content"
          />
          <select
            id="category"
            onChange={handleChangeRoutine}
            value={routineFormState.category}
          >
            <option value="">Select Category</option>
            <option value="Flat Road">Flat Road</option>
            <option value="Climb">Climb</option>
            <option value="Sprints">Sprints</option>
            <option value="Jumps">Jumps</option>
            <option value="Warm-Up">Warm-Up</option>
            <option value="Cool-Down">Cool Down</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditRoutine
