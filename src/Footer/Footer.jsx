import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <p>
          <strong>Eclypse</strong> is a fictional company created for demonstration purposes.
          All rights reserved &copy; {new Date().getFullYear()}.
        </p>
      </div>
      <span>Eclypse</span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ float: 'right' }}
      >
        Go to Top
      </button>
    </div>
  )
}

export default Footer