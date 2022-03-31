import { useEffect } from 'react'
import axios from 'axios'
import JacketCard from '../components/JacketCard'

const EditJacket = ({
  athletes,
  selectedJacket,
  setSelectedJacket,
  selectedAthlete,
  setSelectedAthlete,
  setAthletes,
  setJackets,
  jackets,
  setIsButtonClicked,
  isButtonClicked
}) => {
  useEffect(() => {
    const getJackets = async () => {
      const res = await axios.get(`http://localhost:3001/jackets`)
      setAthletes(res.data.athletes)
      setJackets(res.data.jackets)
    }
    getJackets()
  }, [])

  const handleAthleteSelection = async (event) => {
    await setSelectedAthlete(event.target.value)
  }

  const handleJacketSelection = (event) => {
    setSelectedJacket(event.target.value)
  }

  let isJacketPicked = false

  const getJacketButton = () => {
    if (!selectedJacket || !selectedAthlete) {
      return (
        <button onClick={handleButtonClick} disabled>
          Get Jacket
        </button>
      )
    } else {
      isJacketPicked = true
      return <button onClick={handleButtonClick}>Get Jacket</button>
    }
  }

  const getSampleJacket = () => {
    if (isButtonClicked) {
      return (
        <div>
          <JacketCard jacket={selectedJacket} />
        </div>
      )
    } else {
      return <div></div>
    }
  }

  const handleButtonClick = async () => {
    console.log('Clicked')
    const res = await axios.get(
      `http://localhost:3001/jackets/${selectedJacket}`
    )
    setSelectedJacket(res.data)
    setIsButtonClicked(true)
    isJacketPicked = false
  }

  const handleSubmit = async () => {
    const res = await axios.put(`http://localhost:3001/jackets`, selectedJacket)
    console.log('Submitted')
  }

  const getEditForm = () => {
    if (isButtonClicked) {
      return (
        <div className="edit-form">
          <form onSubmit={handleSubmit}>
            <div className="years">
              <input
                className="star-input"
                type="number"
                required
                min="0"
                name="emptyStars"
                placeholder="Years JV"
                onChange={(e) =>
                  setSelectedJacket({
                    ...selectedJacket,
                    emptyStars: e.target.value
                  })
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
                  setSelectedJacket({
                    ...selectedJacket,
                    fullStars: e.target.value
                  })
                }
              ></input>
            </div>
            <select
              id="role"
              name="role"
              value={selectedJacket.role}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, role: e.target.value })
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
                setSelectedJacket({ ...selectedJacket, award1: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award2"
              placeholder="Award 2"
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award2: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award3"
              placeholder="Award 3"
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award3: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award4"
              placeholder="Award 4"
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award4: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award5"
              placeholder="Award 5"
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award5: e.target.value })
              }
            ></input>
            <button className="submitButton" text="Submit">
              Update Jacket
            </button>
          </form>
        </div>
      )
    } else {
      return <div> </div>
    }
  }

  return (
    <div className="edit-jacket">
      <div className="left-container">
        <h1>Edit Jacket</h1>
        <h2>Choose Athlete</h2>
        <select
          id="select-athlete"
          name="select-athlete"
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
        <h2>Choose Jacket</h2>
        <select
          id="select-jacket"
          name="select-jacket"
          value={selectedJacket}
          onChange={handleJacketSelection}
        >
          <option name="athlete-choice" value="" defaultValue={''} disabled>
            Choose Jacket
          </option>
          {jackets
            .filter((jacket) => jacket.athlete._id === selectedAthlete)
            .map((jacket) => (
              <option value={jacket._id} key={Math.random(0, 1)}>
                {jacket.orderNum.orderNum}
              </option>
            ))}
        </select>
        {getJacketButton()}
        {getEditForm()}
      </div>
      <div className="right-container">{getSampleJacket()}</div>
    </div>
  )
}

export default EditJacket