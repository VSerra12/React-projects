/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'


const NavItem = ({ objItem }) => {
  return (
    <NavLink className="nav-link" to={objItem.ruta}>{objItem.nombre}</NavLink>
  )
}

export default NavItem