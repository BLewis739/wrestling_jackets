import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const AddAthlete = () => {
  const [newAthlete, setNewAthlete] = useState({
    name: '',
    abbrevName: ''
  })

  const handleAthleteSubmit = async (e) => {
    e.preventDefault()
    await axios
      .post('/athletes', newAthlete)
      .then((res) => console.log('successful add'))
      .catch((err) => console.log(err.data))

    setNewAthlete({
      name: '',
      abbrevName: ''
    })
  }

  return (
    <div className="new-athlete-form">
      <h1>Add Athlete</h1>
      <p>
        Enter the name of the athlete and their name to appear on the jacket.
        This adds the athlete to the database so that a jacket can be created
        for them.
      </p>
      <form onSubmit={handleAthleteSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) =>
            setNewAthlete({ ...newAthlete, name: e.target.value })
          }
        ></input>

        <input
          type="text"
          placeholder="Name on Jacket"
          onChange={(e) =>
            setNewAthlete({ ...newAthlete, abbrevName: e.target.value })
          }
        ></input>
        <button className="submitButton" text="Submit">
          Add New Athlete
        </button>
      </form>
    </div>
  )
}

export default AddAthlete
