import React from 'react';
import BillboardCarousel from '../../component/home/BillboardCarousel'
import ComingSoonFilms from '../../component/home/ComingSoonFilms'
import NowPlayingFilms from '../../component/home/NowPlayingFilms'
import apis from '../../api/mock';

function Index() {
  const { banner, playingNow, commingSoon } = apis;
  return (
    <div>
      <BillboardCarousel billboards={banner.data}/>
      <div className="movie">
        <NowPlayingFilms films={playingNow.data.films}/>
        <ComingSoonFilms films={commingSoon.data.films}/>
      </div>
    </div>
    )
}
export default Index;