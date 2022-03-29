import JacketCard from '../components/JacketCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [athletes, setAthletes] = useState([])
  const [jackets, setJackets] = useState([])

  useEffect(() => {
    const getJackets = async () => {
      const res = await axios.get(`http://localhost:3001/jackets`)
      setAthletes(res.data.athletes)
      setJackets(res.data.jackets)
    }
    getJackets()
  }, [])

  console.log('Jackets')
  console.log(jackets)
  console.log('Athletes')
  console.log(athletes)
  jackets.map((jacket) =>
    console.log(
      athletes.filter((athlete) => athlete._id === jacket.athlete)[0].name
    )
  )

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
