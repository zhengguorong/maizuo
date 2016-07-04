/**
 * Created by zhengguorong on 16/7/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {changeLeftNavState} from '../../actions'
import './SideBar.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { dispatch ,showLeftNav} = this.props
    return (
      <aside className="application-sidebar">
      <ReactCSSTransitionGroup transitionName="sidebar" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {showLeftNav?
        <div className="sidebar-container"  onClick={()=>dispatch(changeLeftNavState(false))}>
          <div className="sidebar-overlay">
            <nav>
              <ul>
                <li onClick={()=>browserHistory.push('/')}><a><span>首页</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>browserHistory.push('/film')}><a><span>影片</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>browserHistory.push('/cinema')}><a><span>影院</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>browserHistory.push('/login')}><a><span>我的</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>browserHistory.push('/card')}><a><span>卖座网查询</span><i className="iconfont icon-arrow-right right"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
        :''}
      </ReactCSSTransitionGroup>
      </aside>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    showLeftNav:state.app.showLeftNav||false
  }
}
export default connect(mapStateToProps)(SideBar)
