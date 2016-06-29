/**
 * Created by zhengguorong on 16/6/29.
 */
import React from 'react';
import 'styles/Nabbar.scss'

class Navbar extends React.Component {
  render() {
    return (
      <nav id="toolbar">
        <h1>
        <a href="javascript: void 0;">
          <div className="toolbar-title-icon">
            <i className="iconfont icon-list"></i>
          </div>
          <div className="toolbar-title">
            卖座电影
          </div>
        </a>
      </h1>
      <div id="nav-right">
        <a v-link="{path:'/login'}" className="user">
          <i className="iconfont icon-user"></i>
        </a>
      </div>
    </nav>
    );
  }
  showNav(){

  }
}

export default Navbar;
