/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React,{ Component,PropTypes} from 'react';
import { connect } from 'react-redux'
import {fetchComingSoonLists,fetchBillboards,fetchNowPlayingLists} from '../actions'
import 'styles/App.scss';
import BillboardCarousel from '../components/BillboardCarousel'
import ComingSoonFilms from '../components/ComingSoonFilms'
import NowPlayingFilms from '../components/NowPlayingFilms'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { dispatch } = this.props
    //获取滚动广告
    dispatch(fetchBillboards())
    //获取即将上映电影
    dispatch(fetchComingSoonLists(1,5))
    //获取正在热映的电影
    dispatch(fetchNowPlayingLists(1,5))
  }
  render() {
    const { billboards,comingSoonFilms,nowPlayingFilms } = this.props
    return (
      <div>
        <BillboardCarousel billboards={billboards}/>
        <div className="movie">
        <NowPlayingFilms films={nowPlayingFilms}/>
        <ComingSoonFilms films={comingSoonFilms}/>
        </div>
      </div>
      )
  }

}
App.propTypes={
  comingSoonFilms:PropTypes.array.isRequired,
  nowPlayingFilms: PropTypes.array.isRequired,
  billboards: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  const comingSoonFilms = state.film.comingSoonFilms||[]
  const billboards = state.film.billboards||[]
  const nowPlayingFilms = state.film.nowPlayingFilms||[]
  return {
    comingSoonFilms,
    nowPlayingFilms,
    billboards,

  }
}
export default connect(mapStateToProps)(App)
