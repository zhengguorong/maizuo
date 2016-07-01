/**
 * Created by zhengguorong on 16/6/30.
 */
import React from 'react'
import FilmItem from '../components/FilmItem'
import MoreButton from '../components/MoreButton'

class NowPlayingFilms extends React.Component {
  render() {
    const { films } = this.props
    return (
      <ul>
        {films.map((film,i)=>
          <FilmItem key={i} film={film} type="NOW_PLAYING"/>
        )}
        <MoreButton>更多热门电影</MoreButton>
      </ul>
    )
  }
}

export default NowPlayingFilms
