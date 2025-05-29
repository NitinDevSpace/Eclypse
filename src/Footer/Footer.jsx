import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer_links">
         <strong>Eclypse</strong>
          <span> 
            <Link to="/Eclypse" reloadDocument>Home</Link> /
            <Link to="/about"> About</Link> /
            <Link to="/place-order">Buy</Link>/
            <Link to="/customers">Our Customers</Link>/
            <Link to="/contacts">Contacts</Link>
          </span>
        </div>

        <div className="footer_contacts">
          <h5>CONTACT</h5>
          <span className='number'>+91 123-456-7890</span>
          <h5>EMAIL</h5>
          <span className='email'>eclypse@gmail.com</span>
        </div>
        
      </div>
      
      <div className="footer-right">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p>
          &copy; Eclypse {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

export default Footer