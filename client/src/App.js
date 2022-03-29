import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import AddJacket from './pages/AddJacket'

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="AddJacket" element={<AddJacket />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
