import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useHistory } from 'react-router';
import moment from 'moment';
import './FilmItem.scss';

function FilmItem(props) {
  const { film, type } = props;
  let history = useHistory()

  return (
    <li onClick={() => history.push('/detail/' + film.filmId)}>
      <div className="movie-item">
        <div className="movie-item-img">
          <ImagePlaceholder
            src={film.poster}
            placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"
          />
        </div>
        <div className="desc">
          <div className="left">
            <div className="film-name">{film.name}</div>
            <div className="count">
              <span>{film.cinemaCount}</span>
              <span>家影院上映</span>
              <span>{film.watchCount}</span>
              <span>人购票</span>
            </div>
          </div>
          <div className="right">
            {type === 'COMING_SOON' ? (
              <span className="score" style={{ fontSize: '12px' }}>
                {getTime(film.premiereAt)}
              </span>
            ) : (
              <span className="score">{film.grade}</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
  function getTime(date) {
    return moment(date).format('M月DD日上映');
  }
}
export default FilmItem;
