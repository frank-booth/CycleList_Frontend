import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RiderSongList from './RiderSongList'

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

  const handleSubmit = (event) => {
    for (let i = 0; i < riders.length; i++) {
      if ((event.target.value = riders[i].userName)) {
        navigate(`/riders/${riders[i].id}`, { state: { riders: riders } })
        setFormState(initialState)
        return
      } else {
        alert('Try again')
      }
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
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
