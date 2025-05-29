import React from 'react'
import './Silhouette.css'
import { useNavigate } from 'react-router-dom'; 

const Silhouette = () => {

  const navigate = useNavigate();

  const handleBuy = () => {
    navigate('/place-order');
  };

  return (
    <div>
      <span className='heading'>Silhouette No. 1 - Vermilion</span>
      <div className="silhouette">

        <div className="silhouette__video">
          <video src={`${process.env.PUBLIC_URL}/media/silhoutte_vid.mp4`} autoPlay loop muted></video>
        </div>

          <div className='right_container'>     
            <div className='top_container'>
              <p>A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem,
                 this piece captures presence without force. Worn here in the stillness of a city in motion.</p>
              <img src={`${process.env.PUBLIC_URL}/media/silhoutte_1.jpg`} alt="" />
              <img src={`${process.env.PUBLIC_URL}/media/silhoutte_2.jpg`} alt="" />
              <img src={`${process.env.PUBLIC_URL}/media/silhoutte_3.jpg`} alt="" />
            </div>

            <div className='middle_container'>
              <div className="price_container">
                <span className="price">₹ 7,999</span>
                <span className="mrp">MRP incl. of all taxes</span>
              </div>
              
              <div className='size_container'>
                <span className='size'>Please select a size</span>
                <span className='chart'>Size chart</span>
              </div>

            <div className='size_buttons'>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              </div>

            </div>

            <div className='bottom_container'>
              <button className='add_to_cart'>Add To Cart</button>
              <button className='buy' onClick={handleBuy}>Buy</button>
            </div>
          </div>   

      </div>
    </div>
  )
}

export default Silhouette