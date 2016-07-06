/**
 * Created by zhengguorong on 16/6/30.
 */
import React from 'react'
import './ComingSoonFilms.less'
import FilmItem from './FilmItem'

class ComingSoonFilms extends React.Component {
  render() {
    const { films } = this.props
    return (
      <div>
        <div className="dividing-line">
          <div className="upcoming">
            即将上映
          </div>
        </div>
        <ul>
          {films.map((film,i)=>
            <FilmItem key={i} film={film} type="COMING_SOON"/>
          )}
        </ul>
      </div>
    )
  }
}

export default ComingSoonFilms
