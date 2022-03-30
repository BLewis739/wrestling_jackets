import { useEffect } from 'react'
import axios from 'axios'

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

  const handleJacketSelection = (event) => {
    setSelectedJacket(event.target.value)
    setIsDeleteButtonOff(false)
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

  // const makeJacketArray = () => {
  //   const newJacketArrayItems = jackets.filter((item) => {
  //     return item.athlete._id === selectedAthlete
  //   })
  //   for (let i = 0; i < newJacketArrayItems.length; i++) {
  //     jacketArray.push(newJacketArrayItems[i])
  //   }
  //   console.log(newJacketArrayItems)
  //   console.log(jacketArray)
  // }

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
        {deleteButton()}
      </div>
      <div className="right-container"></div>
    </div>
  )
}

export default DeleteJacket
