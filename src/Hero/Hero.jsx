import React from 'react'
import hero from './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <h1>Eclypse</h1>
      <div className='video_box'>
        <video className='video' src="/media/hero.mp4" autoPlay muted loop></video>
        <span className='overlay_text'>A silhouette worth remembering</span>
      </div>
      <div className='hero_text'>
        <p>
         Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
        </p>
      </div>

      <a href="/about">Learn more about Eclypse</a>
      
    </div>
  )
}

export default Hero