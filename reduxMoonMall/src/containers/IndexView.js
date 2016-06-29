/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React,{ Component} from 'react';
import { connect } from 'react-redux'
import {fetchComingSoonLists,fetchBillboards} from '../actions'
import 'styles/App.scss';
import BillboardCarousel from '../components/BillboardCarousel'

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
  }
  render() {
    const { billboards } = this.props
    return (
      <div>
        <BillboardCarousel billboards={billboards}/>
      </div>
      )
  }

}

const mapStateToProps = (state) => {
  const comingSoonFilms = state.film.comingSoonFilms
  const billboards = state.film.billboards
  return {
    comingSoonFilms,
    billboards
  }
}
export default connect(mapStateToProps)(App)
