import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import CIcon from '../assets/C.svg'

const AddRoutine = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let songId = location.state.songId
  const initialStateRoutine = {
    content: '',
    category: ''
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
    let res = await axios.post(
      `${BASE_URL}/api/routines/${songId}`,
      routineFormState
    ) //********/
    setRoutineFormState(initialStateRoutine)
    navigate(-2)
  }

  return (
    <div className="main-container">
      <img src={CIcon} alt="c-logo-icon" className="c-icon" />
      <h1>Add Routine Here</h1>
      <div className="form-container">
        <form onSubmit={handleSubmitRoutine}>
          <input
            id="content"
            type="text"
            onChange={handleChangeRoutine}
            value={routineFormState.content}
            placeholder="content"
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

export default AddRoutine
