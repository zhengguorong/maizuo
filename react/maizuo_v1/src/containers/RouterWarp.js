/**
 * Created by zhengguorong on 16/8/16.
 */
import React from 'react'

class RouterWarp extends React.Component {

  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}


export default RouterWarp
