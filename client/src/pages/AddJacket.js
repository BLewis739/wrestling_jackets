import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddJacket = () => {
  const [newJacket, setNewJacket] = useState({
    athlete: '6241f15698ac45c8bf098492',
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

  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:3001/jackets', newJacket)
      .then((res) => console.log('successful add'))
      .catch((err) => console.log(err.data))
    navigate('/')
  }

  const disableBtn = () => {
    if (newJacket.emptyStars + newJacket.fullStars === 0) {
      return true
    }
  }

  return (
    <div className="new-jacket-form">
      <h1>Add Jacket</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="athlete" placeholder="Athlete Name"></input>
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
