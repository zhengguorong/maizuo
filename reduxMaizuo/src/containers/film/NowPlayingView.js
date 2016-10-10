/**
 * Created by zhengguorong on 16/7/1.
 */
import React from 'react'
import NowPlayingItem from '../../components/film/NowPlayingItem'

class NowPlayingView extends React.Component {
  render(){
    const {films} = this.props
    return (
      <div className="film-list">
        <ul>
          {films.map((film,i)=>
            <NowPlayingItem key={i} film={film}/>
          )}
      </ul>
  </div>
    )
  }
}

export default NowPlayingView
