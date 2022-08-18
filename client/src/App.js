import './App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Rider from './components/Rider'
import About from './pages/About'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddSong from './components/AddSong'
import AddRoutine from './components/AddRoutine'
import EditSong from './components/EditSong'
import SongGenre from './components/SongGenre'
import RoutineType from './components/RoutineType'

function App() {
  let navigate = useNavigate()

  const [riders, setRiders] = useState()
  const [songs, setSongs] = useState()

  const getAllRiders = async () => {
    let res = await axios.get(`${BASE_URL}/api/riders`)
    setRiders(res.data)
  }

  useEffect(() => {
    getAllRiders()
  }, [])

  const getAllSongs = async () => {
    let res = await axios.get(`${BASE_URL}/api/songs`)
    setSongs(res.data)
  }

  useEffect(() => {
    getAllSongs()
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/riders/:riderId" element={<Rider songs={songs} />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login riders={riders} />} />
          <Route path="/riders/:riderId/addsong" element={<AddSong />} />
          <Route path="/riders/:riderId/editsong" element={<EditSong />} />
          <Route path="/songs/:songId/addroutine" element={<AddRoutine />} />
          <Route path="/songs/genre" element={<SongGenre songs={songs} />} />
          <Route path="/songs/routine" element={<RoutineType songs={songs} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
