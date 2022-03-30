import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/About">
        About
      </Link>
      <Link className="navLink" to="/AddJacket">
        Add Jacket
      </Link>
      <Link className="navLink" to="/EditJacket">
        Edit Jacket
      </Link>
      <Link className="navLink" to="/DeleteJacket">
        Delete Jacket
      </Link>
    </nav>
  )
}
export default NavBar
