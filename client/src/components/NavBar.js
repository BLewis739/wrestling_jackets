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
      <Link className="navLink" to="/AdjustJacket">
        Edit Jacket
      </Link>
    </nav>
  )
}
export default NavBar
