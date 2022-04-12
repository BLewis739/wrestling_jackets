import JacketCard from '../components/JacketCard'
import axios from 'axios'
import { useEffect } from 'react'

const Home = ({
  athletes,
  setAthletes,
  jackets,
  setJackets,
  athletesWithJackets,
  setAthletesWithJackets,
  newJacket
}) => {
  useEffect(() => {
    const getJackets = async () => {
      const res = await axios.get(`/jackets`)
      setAthletes(res.data.athletes)
      setJackets(res.data.jackets)
    }

    getJackets()
  }, [])

  const handleButtonClick = async () => {
    console.log('Clicked button')
    getAthletesWithJackets()
  }

  const getAthletesWithJackets = () => {
    let tempArray = []
    let tempObject = {}
    let updated = false
    for (let i = 0; i < jackets.length; i++) {
      for (let j = 0; j < tempArray.length; j++) {
        if (tempArray[j].athleteId === jackets[i].athlete._id) {
          tempArray[j].jacketArray.push(jackets[i])
          updated = true
        }
      }
      if (updated === false) {
        tempObject = {
          athleteId: jackets[i].athlete._id,
          jacketArray: [jackets[i], newJacket]
        }
        tempArray.push(tempObject)
      }
    }
    setAthletesWithJackets(tempArray)
  }

  return (
    <div>
      <h1>Current Jacket Order</h1>
      <button onClick={handleButtonClick}>Click to Get Jackets</button>

      {athletesWithJackets.map((athlete) => (
        <div className="before-and-after">
          <JacketCard
            key={Math.random() * 100}
            jacket={athlete.jacketArray[0]}
            status="After Update"
          />
          <JacketCard
            key={Math.random() * 100}
            jacket={athlete.jacketArray[athlete.jacketArray.length - 1]}
            status="Before Update"
          />
        </div>
      ))}
    </div>
  )
}

export default Home
