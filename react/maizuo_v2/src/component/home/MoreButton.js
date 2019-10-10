import React from 'react'
import './MoreButton.scss'

function MoreButton (props){
    return (
      <div className="more-button">
        {props.children}
      </div>
    )
}

export default MoreButton
