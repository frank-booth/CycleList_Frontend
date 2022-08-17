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
    event.preventDefault()
    for (
      let i = 1;
      i <= riders.length || formState.userName === riders[i].userName;
      i++
    ) {
      if (true) {
        navigate(`/riders/${riders[i].id}`, { state: { riders: riders } })
        console.log(riders.length)
        console.log(formState.userName)
        setFormState(initialState)
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
