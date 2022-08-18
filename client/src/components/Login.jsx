import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CIcon from '../assets/C.svg'

const Login = ({ riders }) => {
  let navigate = useNavigate()
  const initialState = {
    userName: '',
    passwordDigest: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = () => {
    const userData = riders.find(
      (rider) => rider.userName === formState.userName
    )

    if (userData) {
      navigate(`/riders/${userData.id}`, { state: { rider: userData } })
    } else {
      alert('try again')
    }
  }

  return (
    <div className="main-container">
      <img src={CIcon} alt="c-logo-icon" className="c-icon" />
      <h1>Login</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
