import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const ConfirmAdd = ({ resetStates }) => {
  useEffect(() => {
    resetStates()
  }, [])

  return (
    <div>
      <h3>Jacket successfully added!</h3>
      <Link className="confirmLink" to="/AddJacket">
        Add Another Jacket
      </Link>
      <Link className="confirmLink" to="/">
        Return to Home Page
      </Link>
    </div>
  )
}

export default ConfirmAdd
