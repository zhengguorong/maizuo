import 'styles/reset.css'
import 'styles/icon.css'
import 'normalize.css/normalize.css'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import IndexView from './containers/IndexView'
import NavBar from './components/NavBar'


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
render(
  <div className="application">
    <div className="application-head">
      <NavBar/>
    </div>
    <div className="application-view">
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={IndexView}>
        <Route path="/film" component={IndexView}></Route>
        <Route path="/detail/:id" component={IndexView}></Route>
        <Route path="/login" component={IndexView}></Route>
        <Route path="/card" component={IndexView}></Route>
      </Route>
    </Router>
  </Provider>
      </div>
  </div>,
  document.getElementById('app')
);
