/**
 * Created by zhengguorong on 16/6/29.
 */
import React from 'react';
import {hashHistory } from 'react-router'
import { connect} from 'react-redux'
import {changeLeftNavState} from '../../actions'
import './Nabbar.less'

class Navbar extends React.Component {
  render() {
    const {dispatch} = this.props
    return (
      <nav id="toolbar">
        <h1>
        <a href="javascript: void 0;" onClick={()=>dispatch(changeLeftNavState(true))}>
          <div className="toolbar-title-icon">
            <i className="iconfont icon-list"></i>
          </div>
          <div className="toolbar-title">
            卖座电影
          </div>
        </a>
      </h1>
      <div id="nav-right" onClick={()=>hashHistory.push('login')}>
        <a className="user">
          <i className="iconfont icon-user"></i>
        </a>
      </div>
    </nav>
    );
  }
}

export default connect()(Navbar);
