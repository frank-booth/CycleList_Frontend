import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals.js'

const SignUp = () => {
  let navigate = useNavigate()
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    passwordDigest: '',
    riderImage: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/api/riders`, formState)
    setFormState(initialState)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            id="firstName"
            type="text"
            onChange={handleChange}
            value={formState.firstName}
          />
          <input
            id="lastName"
            type="text"
            onChange={handleChange}
            value={formState.lastName}
          />
          <input
            id="email"
            type="text"
            onChange={handleChange}
            value={formState.email}
          />
          <input
            id="userName"
            type="text"
            onChange={handleChange}
            value={formState.userName}
          />
          <input
            id="passwordDigest"
            type="text"
            onChange={handleChange}
            value={formState.passwordDigest}
          />
          <input
            id="riderImage"
            type="text"
            onChange={handleChange}
            value={formState.riderImage}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
