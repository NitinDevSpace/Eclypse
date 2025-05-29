import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="gallery">
      <div className='first'>
        <div className='gallery_video'>
          <video src={`${process.env.PUBLIC_URL}/media/gallery_video.mp4`} autoPlay loop muted></video>
        </div>
        <div className='gallery_1'>
          <img src={`${process.env.PUBLIC_URL}/media/gallery_1.jpg`} alt="Gallery Image 1" />
          <div class="layer">
            <h3>Premium wool blend in signature vermilion</h3>
          </div>
        </div>
      </div>
      <div className='second'>
        <div className='gallery_2'>
          <img src={`${process.env.PUBLIC_URL}/media/gallery_2.jpg`} alt="Gallery Image 2" />
          <div class="layer">
            <h3>Discreet side pockets with clean finish</h3>
          </div>
        </div>
        <div className='gallery_3'>
          <img src={`${process.env.PUBLIC_URL}/media/gallery_3.jpg`} alt="Gallery Image 3" />
          <div class="layer">
            <h3>Hand-cut and assembled in small batches</h3>
          </div>
        </div>
        <div className='gallery_4'>
          <img src={`${process.env.PUBLIC_URL}/media/logo.jpg`} alt="Gallery Image 4" />
          <div class="layer">
            <h3>Eclypse</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery