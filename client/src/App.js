import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import AddJacket from './pages/AddJacket'
import AddAthlete from './pages/AddAthlete'
import { useState } from 'react'

const App = () => {
  const [athletes, setAthletes] = useState([])
  const [hiddenField, setHiddenField] = useState('hidden')
  const [newJacket, setNewJacket] = useState({
    athlete: '',
    emptyStars: 0,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: '6241f15698ac45c8bf098479'
  })

  const handleChange = (event) => {
    setNewJacket({ ...newJacket, athlete: event.target.value })
    if (event.target.value === 'other') {
      console.log('yes')
      setHiddenField('text')
    } else {
      console.log('no')
      setHiddenField('hidden')
    }
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home athletes={athletes} setAthletes={setAthletes} />}
          />
          <Route path="About" element={<About />} />
          <Route
            path="AddJacket"
            element={
              <AddJacket
                hiddenField={hiddenField}
                handleChange={handleChange}
                newJacket={newJacket}
                setNewJacket={setNewJacket}
                athletes={athletes}
                setAthletes={setAthletes}
              />
            }
          />
          <Route path="AddAthlete" element={<AddAthlete />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
