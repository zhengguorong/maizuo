/**
 * Created by zhengguorong on 16/7/1.
 */
import React from 'react'
import ComingSoonItem from '../../components/film/ComingSoonItem'

class ComingSoonView extends React.Component {

  render() {
    const {films} = this.props
    return (
      <div className="film-list">
        <ul>
            {films.map((film,i)=>
              <ComingSoonItem key={i} film={film}/>
            )}
        </ul>
      </div>
    )
  }
}


export default ComingSoonView
