import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddJacket = ({ hiddenField, newJacket, handleChange, setNewJacket }) => {
  const [athletes, setAthletes] = useState([])
  const [newAthlete, setNewAthlete] = useState({
    name: '',
    abbrevName: ''
  })
  const [newId, setNewId] = useState('')

  const getAthletes = async () => {
    const res = await axios.get(`http://localhost:3001/athletes`)
    setAthletes(res.data)
  }

  useEffect(() => {
    getAthletes()
  }, [])

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newJacket.athlete === 'other') {
      await axios
        .post('http://localhost:3001/athletes', newAthlete)
        .then((res) => console.log('successful add'))
        .catch((err) => console.log(err.data))

      // const newId = await axios.get(
      //   `http://localhost:3001/athletes/${newAthlete.name}`
      // )
      // await setNewJacket({
      //   ...newJacket,
      //   athlete: newId.data
      // })
    }

    axios
      .post('http://localhost:3001/jackets', newJacket)
      .then((res) => console.log('successful add'))
      .catch((err) => console.log(err.data))
    //navigate('/')
  }

  const disableBtn = () => {
    if (newJacket.emptyStars + newJacket.fullStars === 0) {
      return 'true'
    }
  }

  return (
    <div className="new-jacket-form">
      <h1>Add Jacket</h1>
      <form onSubmit={handleSubmit}>
        <select
          id="athlete"
          name="athlete"
          value={newJacket.athlete}
          onChange={handleChange}
        >
          <option name="athlete-choice" value="" defaultValue={''} disabled>
            Select Athlete
          </option>
          {athletes.map((athlete) => (
            <option value={athlete._id} key={Math.random(0, 1)}>
              {athlete.name}
            </option>
          ))}
          <option value="other">New Athlete</option>
        </select>

        <input
          type={hiddenField}
          placeholder="Full Name"
          onChange={(e) =>
            setNewAthlete({ ...newAthlete, name: e.target.value })
          }
        ></input>

        <input
          type={hiddenField}
          placeholder="Name on Jacket"
          onChange={(e) =>
            setNewAthlete({ ...newAthlete, abbrevName: e.target.value })
          }
        ></input>

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
          onChange={(e) => setNewJacket({ ...newJacket, role: e.target.value })}
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
          name="athlete"
          placeholder="Award 2"
          onChange={(e) =>
            setNewJacket({ ...newJacket, award2: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="athlete"
          placeholder="Award 3"
          onChange={(e) =>
            setNewJacket({ ...newJacket, award3: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="athlete"
          placeholder="Award 4"
          onChange={(e) =>
            setNewJacket({ ...newJacket, award4: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="athlete"
          placeholder="Award 5"
          onChange={(e) =>
            setNewJacket({ ...newJacket, award5: e.target.value })
          }
        ></input>
        <button className="submitButton" text="Submit" disabled={disableBtn}>
          Create New Jacket
        </button>
      </form>
    </div>
  )
}

export default AddJacket
