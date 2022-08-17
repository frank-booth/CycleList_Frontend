import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import RiderSongList from './RiderSongList'


const Rider = () => {
  let location = useLocation()
  let navigate = useNavigate()

  let rider = location.state.rider

  const gotToAddSong = () => {
    navigate(`/riders/${rider.id}/addsong`, {state: {rider: rider}})
  }

  return (
    <div>
      <h1>{rider.userName}</h1>
      <h1>My Rides</h1>
      <button onClick={gotToAddSong}>Add Song</button>
      <RiderSongList />

    </div>
  )
}
export default Rider
