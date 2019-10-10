import React, { useContext } from 'react';
import './Nabbar.scss';
import AppContext from '../../AppContext';

function Navbar() {
  const context = useContext(AppContext);
  return (
    <nav id="toolbar">
      <h1>
        <a href="#" onClick={ context.toggleSideBar}>
          <div className="toolbar-title-icon">
            <i className="iconfont icon-list"></i>
          </div>
          <div className="toolbar-title">卖座电影</div>
        </a>
      </h1>
      <div id="nav-right">
        <a className="user">
          <i className="iconfont icon-user"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
