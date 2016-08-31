import 'styles/reset.css'
import 'styles/icon.css'
import 'normalize.css/normalize.css'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores';
import App from './containers/App'

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store)

render(
      <Provider store={store}>
        <App history={history}/>
      </Provider>,

  document.getElementById('app')
);
