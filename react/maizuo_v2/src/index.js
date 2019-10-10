import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/reset.css';
import './styles/icon.css';
import './styles/global.scss';
import Home from './container/home/index';
import Film from './container/film/index';
import Detail from './container/film/Detail';
import Card from './container/card/index';
import Cinema from './container/cinema/index';
import Login from './container/member/Login';
import NavBar from './component/common/NavBar';
import SideBar from './component/common/SideBar';
import AppContext from './AppContext';

function App() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  
  function toggleSideBar() {
    setIsShowSideBar(!isShowSideBar)
  }

  return (
    <AppContext.Provider value={{isShowSideBar, toggleSideBar}}>
      <div className="appliaction">
        <div className="application-head">
          <NavBar />
        </div>
        <div className="application-view">
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/film" component={Film}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/cinema" component={Cinema}></Route>
            <Route path="/card" component={Card}></Route>
            <SideBar />
          </Router>
        </div>
      </div>
    </AppContext.Provider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
