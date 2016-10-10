import React from 'react'
import ImagePlaceholder from '../common/ImagePlaceholder'
import {hashHistory } from 'react-router'
import './NowPlayingItem.less'

class NowPlayingItem extends React.Component {
  render() {
    const {film} = this.props
    return (
      <li onClick={() => hashHistory.push('/detail/'+film.id)}>
        <div className="film-item">
          <div className="film-item-img">
            <ImagePlaceholder src={film&&film.poster.thumbnail} placeholder='http://static.m.maizuo.com/v4/static/app/asset/23568dc30235133ebeec89fbded3863b.png'/>
        </div>
        <div className="film-desc">
          <div className="film-next-arrow">
            <i className="iconfont icon-arrow-right film-next-icon"></i>
          </div>
          <div className="film-grade">{film.grade}</div>
          <div className="film-name">{film.name}</div>
          <div className="film-intro">{film.intro}</div>
          <div className="film-counts">
            <span className="film-count-color1">{film.cinemaCount}</span>
            <span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="film-count-color1">{film.watchCount}</span>
            <span >人购票  </span>
          </div>
        </div>
      </div>
  </li>
    )
  }
}

export default NowPlayingItem
