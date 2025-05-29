import React from 'react'
import hero from './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='hero'>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <h1>Eclypse</h1>
        <FontAwesomeIcon icon={faRegistered} className="fa-regular" />
      </div>
      <span> &copy; 2025</span>
      <div className='video_box'>
        <video className='video' src={`${process.env.PUBLIC_URL}/media/hero.mp4`} autoPlay muted loop />
        <span className='overlay_text'>A silhouette worth remembering</span>
      </div>
      <div className='hero_text'>
        <p>
         Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
        </p>
      </div>

      <a href="/about">Learn more about Eclypse   <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
       
    </div>
  )
}

export default Hero