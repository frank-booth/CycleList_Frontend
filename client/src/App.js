import "./App.css";
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header>
        <h1>CycleList</h1>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
