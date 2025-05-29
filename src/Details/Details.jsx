import React from 'react'
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
  return (
    <div className="details">

      <div className="details_first">
        <span>Size & Fit <FontAwesomeIcon icon={faArrowDown} /></span>
      </div>

      <div className="details_second">
        <span>Delivery & Returns <FontAwesomeIcon icon={faArrowDown} /></span>
      </div>

      <div className="details_third">
        <span>How This Was Made <FontAwesomeIcon icon={faArrowDown} /></span>
      </div>

    </div>
  )
}

export default Details