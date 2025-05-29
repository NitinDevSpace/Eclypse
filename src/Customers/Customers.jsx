import React from 'react'
import './Customer.css'

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

          <div className='pointer'>Arrow</div>

           <div className="review-images">
            <img  src="/media/customer_1.jpg" alt="Customer 1" />
            <img  src="/media/customer_2.jpg" alt="Customer 2" />
            <img  src="/media/customer_3.jpg" alt="Customer 3" />
          </div>

        </div>
    </div>
  )
}

export default Customers