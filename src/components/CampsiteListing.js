import React from 'react'
import '../styles/CampsiteListing.css'

const CampsiteListing = (props) => {
  const { name, description } = props.campsite
  return (
    <div className="campsite">
      <div className="campsite__wordsCol">
        <h3 className="campsite__title" >{ name }</h3>
        <p className="campsite__description">{ description }</p>
      </div>
      <div className="campsite__actCol">
        <button className="campsite__btn" onClick={ () => props.toggleRequestModal(true) }>
          catch a lyft
        </button>
      </div>
    </div>
  )
}

export default CampsiteListing
