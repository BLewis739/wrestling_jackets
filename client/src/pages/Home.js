import JacketCard from '../components/JacketCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = ({ athletes, setAthletes }) => {
  const [jackets, setJackets] = useState([])

  useEffect(() => {
    const getJackets = async () => {
      const res = await axios.get(`http://localhost:3001/jackets`)
      setAthletes(res.data.athletes)
      setJackets(res.data.jackets)
    }
    getJackets()
  }, [])

  return (
    <div>
      <h1>Jackets</h1>
      {jackets.map((jacket) => (
        <JacketCard
          athletes={athletes}
          athleteId={jacket.athlete}
          key={jacket._id}
          jacket={jacket}
        />
      ))}
    </div>
  )
}

export default Home
