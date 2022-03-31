import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const ConfirmEdit = ({ resetStates }) => {
  useEffect(() => {
    resetStates()
  }, [])

  return (
    <div className="confirm-link-container">
      <h3>Jacket successfully edited!</h3>
      <Link className="confirmLink" to="/EditJacket">
        Edit Another Jacket
      </Link>
      <Link className="confirmLink" to="/">
        Return to Home Page
      </Link>
    </div>
  )
}

export default ConfirmEdit
