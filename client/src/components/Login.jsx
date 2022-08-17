import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      console.log(userData.firstName)
    } else {
      alert('try again')
    }
  }

  return (
    <div>
      <h1>Login</h1>
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
  )
}

export default Login
