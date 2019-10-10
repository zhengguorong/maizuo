import React, {useState} from 'react';
import './index.scss';
import apis from '../../api/mock';
import ComingSoonItem from '../../component/film/ComingSoonItem';
import NowPlayingItem from '../../component/film/NowPlayingItem';

function Film() {
  const { playingNow, commingSoon } = apis;
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <section className="film-view">
      <div className="film-list-wrap">
        <div className="film-list-nav">
          <div className="tab">
            <div className={tabIndex === 0 ? "choosing now-playing": 'now-playing'} onClick={() => setTabIndex(0)}>
              正在热映
            </div>
            <div className={tabIndex === 1 ? "choosing coming-soon": 'coming-soon'} onClick={() => setTabIndex(1)}>
              即将上映
            </div>
          </div>
          <div className="film-list">
            <ul>
              {tabIndex === 0
                ? playingNow.data.films.map((film, i) => (
                    <NowPlayingItem key={i} film={film} />
                  ))
                : commingSoon.data.films.map((film, i) => (
                    <ComingSoonItem key={i} film={film} />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Film;
