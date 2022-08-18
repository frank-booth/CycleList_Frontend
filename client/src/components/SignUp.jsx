import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals.js'
import CIcon from '../assets/C.svg'

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
    navigate(`/riders/${res.data.id}`, { state: { rider: res.data } })
  }

  return (
    <div className="main-container">
      <img src={CIcon} alt="c-logo-icon" className="c-icon" />
      <h1>Sign Up</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            id="firstName"
            type="text"
            onChange={handleChange}
            value={formState.firstName}
            placeholder="First Name"
          />
          <input
            id="lastName"
            type="text"
            onChange={handleChange}
            value={formState.lastName}
            placeholder="Last Name"
          />
          <input
            id="email"
            type="text"
            onChange={handleChange}
            value={formState.email}
            placeholder="Email"
          />
          <input
            id="userName"
            type="text"
            onChange={handleChange}
            value={formState.userName}
            placeholder="Username"
          />
          <input
            id="passwordDigest"
            type="text"
            onChange={handleChange}
            value={formState.passwordDigest}
            placeholder="Password"
          />
          <input
            id="riderImage"
            type="text"
            onChange={handleChange}
            value={formState.riderImage}
            placeholder="Profile Picture"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
