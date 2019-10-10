/**
 * Created by zhengguorong on 16/7/1.
 */
import React from 'react';
import moment from 'moment';
import ImagePlaceholder from '../../component/common/ImagePlaceholder';
import './Detail.scss';
import apis from '../../api/mock';

function DetailView() {
  const { detail } = apis;
  const { film } = detail.data;
  return (
    <section className="content film-view">
      <div className="film-img-wrap">
        <ImagePlaceholder
          src={film.poster}
          placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"
        />
      </div>
      <div>
        <div className="player_mask hide">
          <div id="youkuplayer" className="prevue-player"></div>
        </div>
      </div>
      <div className="film-intro">
        <div className="film-word1">影片简介</div>
        <div className="film-word2">
          <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
          <span>{film.director}</span>
        </div>
        <div className="film-word2">
          <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
          <span>{getDiplayActors(film.actors || [])}</span>
        </div>
        <div className="film-word2">
          <span>地区语言：</span>
          <span>{film.nation}</span>
          <span>(</span>
          <span>{film.language}</span>
          <span>)</span>
        </div>
        <div className="film-word2">
          <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
          <span>{film.category}</span>
        </div>
        <div className="film-word2">
          <span>上映日期：</span>
          <span>{getTime(film.premiereAt)}</span>
        </div>
        <div className="film-word3">{film.synopsis}</div>
      </div>
      <div className="operation">
        <button className="cpn-primary-button ">立即购票</button>
      </div>
    </section>
  );
  function getTime(date) {
    return moment(date).format('M月DD日上映');
  }
  function getDiplayActors(actors) {
    let displayActors = '';
    actors.forEach((actor) => {
      displayActors += actor.name + ' | ';
    });
    return displayActors;
  }
}

export default DetailView;
