import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import AddJacket from './pages/AddJacket'
import AddAthlete from './pages/AddAthlete'
import DeleteJacket from './pages/DeleteJacket'
import EditJacket from './pages/EditJacket'
import ConfirmAdd from './pages/confirmationPages/ConfirmAdd'
import ConfirmDelete from './pages/confirmationPages/ConfirmDelete'
import ConfirmEdit from './pages/confirmationPages/ConfirmEdit'
import { useState } from 'react'

const App = () => {
  const [athletes, setAthletes] = useState([])
  const [jackets, setJackets] = useState([])
  const [athletesWithJackets, setAthletesWithJackets] = useState([])
  const [orders, setOrders] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [selectedAthlete, setSelectedAthlete] = useState('')
  const [selectedJacket, setSelectedJacket] = useState('')
  const [isDeleteButtonOff, setIsDeleteButtonOff] = useState(true)
  const [isAthletePicked, setIsAthletePicked] = useState(false)
  const [isJacketPicked, setIsJacketPicked] = useState(false)
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
    orderNum: '62448c5406dae48881b03e0c'
  })

  const resetStates = () => {
    setIsButtonClicked(false)
    setSelectedAthlete('')
    setSelectedJacket('')
    setIsDeleteButtonOff(true)
    setIsAthletePicked(false)
    setNewJacket({
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
      orderNum: '62448c5406dae48881b03e0c'
    })
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
            element={
              <Home
                athletes={athletes}
                setAthletes={setAthletes}
                jackets={jackets}
                setJackets={setJackets}
                athletesWithJackets={athletesWithJackets}
                setAthletesWithJackets={setAthletesWithJackets}
                newJacket={newJacket}
              />
            }
          />
          <Route path="About" element={<About />} />
          <Route
            path="AddJacket"
            element={
              <AddJacket
                selectedAthlete={selectedAthlete}
                newJacket={newJacket}
                setNewJacket={setNewJacket}
                athletes={athletes}
                setAthletes={setAthletes}
                setSelectedAthlete={setSelectedAthlete}
                setOrders={setOrders}
                isAthletePicked={isAthletePicked}
                setIsAthletePicked={setIsAthletePicked}
              />
            }
          />
          <Route path="AddAthlete" element={<AddAthlete />} />
          <Route
            path="DeleteJacket"
            element={
              <DeleteJacket
                athletes={athletes}
                selectedAthlete={selectedAthlete}
                setSelectedAthlete={setSelectedAthlete}
                selectedJacket={selectedJacket}
                setSelectedJacket={setSelectedJacket}
                setAthletes={setAthletes}
                setJackets={setJackets}
                jackets={jackets}
                isDeleteButtonOff={isDeleteButtonOff}
                setIsDeleteButtonOff={setIsDeleteButtonOff}
              />
            }
          />
          <Route
            path="EditJacket"
            element={
              <EditJacket
                athletes={athletes}
                selectedAthlete={selectedAthlete}
                setSelectedAthlete={setSelectedAthlete}
                selectedJacket={selectedJacket}
                setSelectedJacket={setSelectedJacket}
                setAthletes={setAthletes}
                setJackets={setJackets}
                jackets={jackets}
                setIsButtonClicked={setIsButtonClicked}
                isButtonClicked={isButtonClicked}
                isJacketPicked={isJacketPicked}
                setIsJacketPicked={setIsJacketPicked}
              />
            }
          />
          <Route
            path="ConfirmAdd"
            element={<ConfirmAdd resetStates={resetStates} />}
          />
          <Route
            path="ConfirmEdit"
            element={<ConfirmEdit resetStates={resetStates} />}
          />
          <Route
            path="ConfirmDelete"
            element={<ConfirmDelete resetStates={resetStates} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
