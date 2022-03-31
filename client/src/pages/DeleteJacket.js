import { useEffect } from 'react'
import axios from 'axios'
import JacketCard from '../components/JacketCard'

const DeleteJacket = ({
  athletes,
  selectedJacket,
  setSelectedJacket,
  selectedAthlete,
  setSelectedAthlete,
  setAthletes,
  setJackets,
  jackets,
  isDeleteButtonOff,
  setIsDeleteButtonOff
}) => {
  useEffect(() => {
    const getJackets = async () => {
      const res = await axios.get(`http://localhost:3001/jackets`)
      setAthletes(res.data.athletes)
      setJackets(res.data.jackets)
    }
    getJackets()
  }, [])

  //let athleteSelected = false

  const handleAthleteSelection = async (event) => {
    await setSelectedAthlete(event.target.value)
    //athleteSelected = true
  }

  const handleJacketSelection = async (event) => {
    await setSelectedJacket(event.target.value)
    // const res = await axios.get(
    //   `http://localhost:3001/jackets/${selectedJacket}`
    // )
    // setSelectedJacket(res.data)
  }

  const deleteButton = () => {
    if (isDeleteButtonOff) {
      return (
        <button onClick={handleButtonClick} disabled>
          Delete Jacket
        </button>
      )
    } else {
      return <button onClick={handleButtonClick}>Delete Jacket</button>
    }
  }

  const handleButtonClick = async () => {
    console.log('Clicked')
    const res = await axios.delete(
      `http://localhost:3001/jackets/${selectedJacket}`
    )
  }

  const handlePreviewButtonClick = async () => {
    const res = await axios.get(
      `http://localhost:3001/jackets/${selectedJacket}`
    )
    setSelectedJacket(res.data)
    setIsDeleteButtonOff(false)
  }

  const getSampleJacket = () => {
    if (!isDeleteButtonOff) {
      return (
        <div>
          <JacketCard jacket={selectedJacket} />
        </div>
      )
    } else {
      return <div></div>
    }
  }

  const getJacketButton = () => {
    if (!selectedJacket || !selectedAthlete) {
      return (
        <button onClick={handlePreviewButtonClick} disabled>
          Preview Jacket
        </button>
      )
    } else {
      return <button onClick={handlePreviewButtonClick}>Preview Jacket</button>
    }
  }

  return (
    <div className="delete-jacket">
      <div className="left-container">
        <h1>Delete Jacket</h1>
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
        {deleteButton()}
      </div>
      <div className="right-container">{getSampleJacket()}</div>
    </div>
  )
}

export default DeleteJacket
