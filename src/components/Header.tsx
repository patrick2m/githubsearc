import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/">
        <span><strong>Github</strong>Search</span>
      </Link>
      <div>
        <NavLink 
          to="/" 
          style={({ isActive }) => {
            return {
              fontWeight: "bold",
              color: isActive ? "red" : "black"
            }
          }}
        >
          INICIO
        </NavLink>
        <NavLink 
          to="/Favoritos"
          style={({ isActive }) => {
            return {
              fontWeight: "bold",
              color: isActive ? "red" : "black"
            }
          }}
        >
          FAVORITOS
        </NavLink>
      </div>
    </div>
  )
}

export default Header