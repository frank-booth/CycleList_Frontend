import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Rider from "./pages/Rider";
import Songs from "./pages/Songs";
import SongRoutine from "./pages/SongRoutine";
import About from "./pages/About";

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
