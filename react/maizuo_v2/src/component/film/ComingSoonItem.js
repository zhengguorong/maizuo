import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useHistory } from 'react-router';
import './ComingSoonItem.scss';

function ComingSoonItem(props) {
  const { film } = props;
  let history = useHistory()
  return (
    <li onClick={() => history.push('/detail/' + film.id)}>
      <div className="film-item">
        <div className="film-item-img">
          <ImagePlaceholder
            src={film && film.poster}
            placeholder="http://static.m.maizuo.com/v4/static/app/asset/23568dc30235133ebeec89fbded3863b.png"
          />
        </div>
        <div className="film-desc">
          <div className="film-next-arrow">
            <i className="iconfont icon-arrow-right film-next-icon"></i>
          </div>
          <div className="film-grade">{film.grade}</div>
          <div className="film-name">{film.name}</div>
          <div className="film-intro">{film.intro}</div>
          <div className="film-premiere-date">
            <span>6月24日上映</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>星期五</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ComingSoonItem;
