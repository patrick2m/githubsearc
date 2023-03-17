import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/">
        <span><strong>Github</strong>Search</span>
      </Link>
      <div>
        <NavLink to="/" id='inicio'>INICIO</NavLink>
        <NavLink to="/Favoritos" id='favoritos'>FAVORITOS</NavLink>
      </div>
    </div>
  )
}

export default Header