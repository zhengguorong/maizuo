/**
 * Created by zhengguorong on 16/6/30.
 */
import React from 'react';
import FilmItem from './FilmItem';
import { Link } from 'react-router-dom';
import MoreButton from './MoreButton';

function NowPlayingFilms(props) {
  const { films = [] } = props;
  return (
    <ul>
      {films.map((film, i) => (
        <FilmItem key={i} film={film} type="NOW_PLAYING" />
      ))}
      <MoreButton>
        <Link to="/film">更多热门电影</Link>
      </MoreButton>
    </ul>
  );
}

export default NowPlayingFilms;
