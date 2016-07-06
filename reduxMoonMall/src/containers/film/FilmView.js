import React from 'react'
import { connect } from 'react-redux'
import NowPlayingView from './NowPlayingView'
import ComingSoonView from './ComingSoonView'
import { changeTab,fetchComingSoonLists,fetchNowPlayingLists } from '../../actions'
import './FilmView.less'

class FilmView extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchNowPlayingLists(1,10))
    dispatch(fetchComingSoonLists(1,10))
  }
  render() {
    const {dispatch,curTab,nowPlayingFilms,comingSoonFilms} = this.props
    let nowPlayingStyle='now-playing'
    let comingSoonStyle='coming-soon'
    if(curTab==='NOW_PLAYING'){
      nowPlayingStyle=nowPlayingStyle+' choosing'
    }else{
      comingSoonStyle=comingSoonStyle+' choosing'
    }
    return (
      <section className="film-view">
        <div className="film-list-wrap">
          <div className="film-list-nav">
            <a href="javascript:void(0);"  onClick={()=>dispatch(changeTab('NOW_PLAYING'))}>
              <div className={nowPlayingStyle}>正在热映</div>
            </a>
            <a href="javascript:void(0);" onClick={()=>dispatch(changeTab('COMING_SOON'))}>
              <div className={comingSoonStyle}>即将上映</div>
            </a>
          </div>
          {this.props.curTab==='NOW_PLAYING'?<NowPlayingView films={nowPlayingFilms}/>:<ComingSoonView films={comingSoonFilms}/>}
        </div>
      </section>
    )
  }

}
const mapStateToProps = (state) =>{
  const curTab = state.app.curTab||'NOW_PLAYING'
  const nowPlayingFilms = state.film.nowPlayingFilms||[]
  const comingSoonFilms = state.film.comingSoonFilms||[]
  return {
    curTab,
    comingSoonFilms,
    nowPlayingFilms
  }
}

export default connect(mapStateToProps)(FilmView)
