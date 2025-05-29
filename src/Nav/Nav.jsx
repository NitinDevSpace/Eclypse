import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css' 

const Nav = () => {
  const navigate = useNavigate();
   const handleBuy = () => {
    navigate('/place-order');
  };
  return (
    <nav className="navbar">
     <Link to= "/"> <img src="/media/logo.png" alt="logo" className="logo" /></Link>
      <ul className="nav_links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Waitlist</Link></li>
        <li><Link to="/contact">Cart</Link></li>
        <button className="btn" onClick={handleBuy} >Buy</button>
      </ul>
    </nav>
  )
}

export default Nav