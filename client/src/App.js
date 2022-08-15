import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Rider from './components/Rider'
import Songs from './pages/Songs'
import SongRoutine from './pages/SongRoutine'
import About from './pages/About'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddSong from './components/AddSong'
import SongGenre from './components/SongGenre'
import RoutineType from './components/RoutineType'

function App() {
  return (
    <div className="App">
      <header>
        <h1>CycleList</h1>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/riders/:riderId" element={<Rider />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:songId" element={<SongRoutine />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/riders/:riderId/addsong" element={<AddSong />} />
          <Route path="/songs/genres" element={<SongGenre />} />
          <Route path="/songs/routine-types" element={<RoutineType />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
