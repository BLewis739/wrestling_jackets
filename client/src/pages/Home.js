import JacketCard from '../components/JacketCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [jackets, setJackets] = useState([])
  const [athletes, setAthletes] = useState([])

  useEffect(() => {
    const getJackets = async () => {
      const res = await axios.get(`http://localhost:3001/jackets`)
      setJackets(res.data)
    }
    getJackets()
  }, [])

  useEffect(() => {
    const getAthletes = async () => {
      const res = await axios.get(`http://localhost:3001/athletes`)
      setAthletes(res.data)
    }
    getAthletes()
  }, [])

  console.log('Jackets')
  console.log(jackets)
  console.log('Athletes')
  console.log(athletes)

  return (
    <div>
      <h1>Jackets</h1>
      {jackets.map((jacket) => (
        <JacketCard
          athletes={athletes}
          athleteId={jacket.athlete}
          key={jacket._id}
        />
      ))}
    </div>
  )
}

export default Home
