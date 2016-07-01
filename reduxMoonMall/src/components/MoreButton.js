import React from 'react'
import 'styles/MoreButton.scss'

class MoreButton extends React.Component{
  render(){
    return (
      <div className="more-button">
        {this.props.children}
      </div>
    )
  }
}

export default MoreButton
