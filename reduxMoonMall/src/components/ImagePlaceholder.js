import React from 'react'

class ImagePlaceholder extends React.Component{

  render() {
    const {src,placeholder}=this.props
    const bgStyle={
      backgroundImage:'url('+placeholder+')',
      backgroundSize:100+'%'
    }
    return (
      <div class="img-responsive" style={bgStyle} >
        <img ref="image" src={src} onLoad={this.handleImageLoaded.bind(this)} style={{width : 100+'%',transition:'all 1.2s ease',opacity:0}} />
      </div>
    )
  }
  handleImageLoaded() {
    this.refs['image'].style.opacity=1
  }
}
export default ImagePlaceholder
