/**
 * Created by zhengguorong on 16/7/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Router, Route,IndexRoute } from 'react-router'
import RouterWarp from './RouterWarp'
import NavBar from '../components/common/NavBar'
import IndexView from './IndexView'
import DetailView from '../containers/film/DetailView'
import LoginView from '../containers/member/LoginView'
import FilmView from '../containers/film/FilmView'
import SideBar from '../components/common/SideBar'
import CinemaIndexView from '../containers/cinema/IndexView'
import CardIndexView from '../containers/card/IndexView'


class App extends React.Component {
  render(){

    return (
      <div className="application">
        <div className="application-head">
          <NavBar/>
        </div>
        <div className="application-view">
          <Router history={this.props.history}>
            <Route path="/" component={RouterWarp}>
              <IndexRoute component={IndexView}/>
              <Route path="film" component={FilmView}></Route>
              <Route path="detail/:id" component={DetailView}></Route>
              <Route path="login" component={LoginView}></Route>
              <Route path="cinema" component={CinemaIndexView}></Route>
              <Route path="card" component={CardIndexView}></Route>
            </Route>

          </Router>
        </div>
        <SideBar/>
        <div id="nprogress">
          <div className="spinner" role="spinner" style={{display:this.props.loading?'block':'none'}}>
            <div className="spinner-icon"></div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    const loading = state.app.loading
    return {
      loading:loading
    }
}


export default connect(mapStateToProps)(App)
