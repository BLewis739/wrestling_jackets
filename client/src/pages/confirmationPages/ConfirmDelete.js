import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const ConfirmDelete = ({ resetStates }) => {
  useEffect(() => {
    resetStates()
  }, [])

  return (
    <div>
      <h3>Jacket successfully deleted!</h3>
      <Link className="confirmLink" to="/DeleteJacket">
        Delete Another Jacket
      </Link>
      <Link className="confirmLink" to="/">
        Return to Home Page
      </Link>
    </div>
  )
}

export default ConfirmDelete
