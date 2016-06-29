import 'styles/reset.css'
import 'styles/icon.css'
import 'normalize.css/normalize.css'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';

import IndexView from './containers/IndexView'
import NavBar from './components/NavBar'


const store = configureStore();

render(
  <div className="application">
    <div className="application-head">
      <NavBar/>
    </div>
    <div className="application-view">
  <Provider store={store}>
  <IndexView/>
  </Provider>
      </div>
  </div>,
  document.getElementById('app')
);
