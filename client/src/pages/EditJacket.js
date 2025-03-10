import { useEffect } from 'react'
import axios from 'axios'
import JacketCard from '../components/JacketCard'
import { Navigate, useNavigate } from 'react-router-dom'

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
  isButtonClicked,
  isJacketPicked,
  setIsJacketPicked
}) => {
  useEffect(() => {
    const getJackets = async () => {
      const res = await axios.get(`/jackets`)
      setAthletes(res.data.athletes)
      setJackets(res.data.jackets)
    }
    getJackets()
  }, [])

  let navigate = useNavigate()

  const handleAthleteSelection = async (event) => {
    await setSelectedAthlete(event.target.value)
  }

  const handleJacketSelection = (event) => {
    setSelectedJacket(event.target.value)
  }

  const getJacketButton = () => {
    if (!selectedJacket || !selectedAthlete) {
      return (
        <button onClick={handleButtonClick} disabled>
          Get Jacket
        </button>
      )
    } else {
      setIsJacketPicked(true)
      return (
        <div>
          <button onClick={handleButtonClick}>Get Jacket</button>
        </div>
      )
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
    const res = await axios.get(`/jackets/${selectedJacket}`)
    setSelectedJacket(res.data)
    setIsButtonClicked(true)
    isJacketPicked = false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.put(
      `/jackets/${selectedJacket._id}`,
      selectedJacket
    )
    console.log('Submitted')
    navigate('/ConfirmEdit')
  }

  const getEditForm = () => {
    if (isButtonClicked) {
      return (
        <div className="edit-form">
          <h3>Current Jacket Info</h3>
          <form onSubmit={handleSubmit}>
            <div className="years">
              <input
                className="star-input"
                type="number"
                required
                min="0"
                name="emptyStars"
                value={selectedJacket.emptyStars}
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
                value={selectedJacket.fullStars}
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
              value={selectedJacket.award1}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award1: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award2"
              value={selectedJacket.award2}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award2: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award3"
              value={selectedJacket.award3}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award3: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award4"
              value={selectedJacket.award4}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award4: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award5"
              value={selectedJacket.award5}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award5: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award6"
              value={selectedJacket.award6}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award6: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award7"
              value={selectedJacket.award7}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award7: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award8"
              value={selectedJacket.award8}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award8: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award9"
              value={selectedJacket.award9}
              onChange={(e) =>
                setSelectedJacket({ ...selectedJacket, award9: e.target.value })
              }
            ></input>
            <input
              type="text"
              name="award10"
              value={selectedJacket.award10}
              onChange={(e) =>
                setSelectedJacket({
                  ...selectedJacket,
                  award10: e.target.value
                })
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
