import React from 'react'
import './Customer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const Customers = () => {
  return (
    <div className="customers">
        <h3>OUR CUSTOMERS</h3>

        <div className="customer_content">

          <div className="review-text">
            <p className='collon'>“</p>
            <div className='details'>
              <span className='review'>Understated, but unforgettable. It feels like it was made for me</span>
              <span className='customer_name'>Random Woman</span>
              <span className='customer_place'>NY, USA</span>
            </div>
          </div>

          <FontAwesomeIcon icon={faCaretLeft} />

           <div className="review-images">
            <img  src={`${process.env.PUBLIC_URL}/media/customer_1.jpg`} alt="Customer 1" />
            <img src={`${process.env.PUBLIC_URL}/media/customer_2.jpg`} alt="Customer 2" />
            <img  src={`${process.env.PUBLIC_URL}/media/customer_3.jpg`} alt="Customer 3" />
          </div>

        </div>
    </div>
  )
}

export default Customers