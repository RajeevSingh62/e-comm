import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/128/3051/3051772.png"  alt="logo" className='logo'/>
      {auth ? <ul className='nav-ul'>
        <li><Link to="/">Product</Link></li>
        <li><Link to="/add">Add product</Link></li>
        <li><Link to="/update">Update product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse( auth).name})</Link></li>
      </ul>
        :
        <ul className='nav-ul nav-right'>
          <li> <Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      }
    </div>
  )
}

export default Nav