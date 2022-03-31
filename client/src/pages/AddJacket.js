import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import JacketCard from '../components/JacketCard'

const AddJacket = ({
  newJacket,
  setNewJacket,
  athletes,
  setAthletes,
  setOrders,
  selectedAthlete,
  setSelectedAthlete,
  isAthletePicked,
  setIsAthletePicked
}) => {
  const getAthletes = async () => {
    const res = await axios.get(`/athletes`)
    setAthletes(res.data)
  }

  useEffect(() => {
    getAthletes()
    const getOrders = async () => {
      const res = await axios.get(`/orders`)
      setOrders(res.data)
    }
    getOrders()
  }, [])

  const handleAthleteSelection = async (event) => {
    await setSelectedAthlete(event.target.value)
    const chosenAthlete = await axios.get(`/athletes/${event.target.value}`)
    await setNewJacket({ ...newJacket, athlete: chosenAthlete.data })
    setIsAthletePicked(true)
  }

  const generateSampleJacket = () => {
    if (isAthletePicked) {
      return (
        <div className="jacket-card">
          <JacketCard jacket={newJacket} />
        </div>
      )
    } else {
      return <div></div>
    }
  }

  const createJacketButton = () => {
    if (newJacket.emptyStars + newJacket.fullStars > 0) {
      return (
        <button className="submitButton" text="Submit">
          Create New Jacket
        </button>
      )
    } else {
      return (
        <button className="submitButton" text="Submit" disabled>
          Create New Jacket
        </button>
      )
    }
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios
      .post('/jackets', newJacket)
      .then((res) => console.log('successful add'))
      .catch((err) => console.log(err.data))

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
      orderNum: ''
    })

    navigate('/ConfirmAdd')
  }

  return (
    <div className="new-jacket-form">
      <div className="left-container">
        <h1>Add Jacket</h1>
        <Link className="add-new-athlete" to="/AddAthlete">
          Add New Athlete
        </Link>
        <form onSubmit={handleSubmit}>
          <select
            id="athlete"
            name="athlete"
            value={selectedAthlete}
            onChange={handleAthleteSelection}
          >
            <option name="athlete-choice" value="" defaultValue={''} disabled>
              Choose Existing Athlete
            </option>
            {athletes.map((athlete) => (
              <option value={athlete._id} key={Math.random(0, 1)}>
                {athlete.name}
              </option>
            ))}
          </select>

          <div className="years">
            <input
              className="star-input"
              type="number"
              required
              min="0"
              name="emptyStars"
              placeholder="Years JV"
              onChange={(e) =>
                setNewJacket({ ...newJacket, emptyStars: e.target.value })
              }
            ></input>
            <input
              className="star-input"
              type="number"
              required
              min="0"
              name="fullStars"
              placeholder="Years Varsity"
              onChange={(e) =>
                setNewJacket({ ...newJacket, fullStars: e.target.value })
              }
            ></input>
          </div>
          <select
            id="role"
            name="role"
            value={newJacket.role}
            onChange={(e) =>
              setNewJacket({ ...newJacket, role: e.target.value })
            }
          >
            <option value="" defaultValue={''} disabled hidden>
              Role
            </option>
            <option value="">None</option>
            <option value="Capt.">Captain</option>
            <option value="Manager">Manager</option>
          </select>
          <input
            type="text"
            name="award1"
            placeholder="Award 1"
            onChange={(e) =>
              setNewJacket({ ...newJacket, award1: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="award2"
            placeholder="Award 2"
            onChange={(e) =>
              setNewJacket({ ...newJacket, award2: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="award3"
            placeholder="Award 3"
            onChange={(e) =>
              setNewJacket({ ...newJacket, award3: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="award4"
            placeholder="Award 4"
            onChange={(e) =>
              setNewJacket({ ...newJacket, award4: e.target.value })
            }
          ></input>
          <input
            type="text"
            name="award5"
            placeholder="Award 5"
            onChange={(e) =>
              setNewJacket({ ...newJacket, award5: e.target.value })
            }
          ></input>
          {createJacketButton()}
        </form>
      </div>
      <div className="right-container">{generateSampleJacket()}</div>
    </div>
  )
}

export default AddJacket
