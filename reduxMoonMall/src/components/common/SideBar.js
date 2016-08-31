/**
 * Created by zhengguorong on 16/7/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import {changeLeftNavState} from '../../actions'
import './SideBar.less'


class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { dispatch ,showLeftNav} = this.props

    return (
      <aside className="application-sidebar">
        <div className="sidebar-container sidebar-transition" style={showLeftNav?{opacity:1,zIndex:99}:{opacity:0,zIndex:-1}} onClick={()=>dispatch(changeLeftNavState(false))}>
          <div className="sidebar-overlay">
            <nav className="leftNav-transition" style={showLeftNav?{right:110+'px'}:{right:320+'px'}}>
              <ul>
                <li onClick={()=>hashHistory.push('/')}><a><span>首页</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>hashHistory.push('film')}><a><span>影片</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>hashHistory.push('cinema')}><a><span>影院</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>hashHistory.push('login')}><a><span>我的</span><i className="iconfont icon-arrow-right right"></i></a></li>
                <li onClick={()=>hashHistory.push('card')}><a><span>卖座网查询</span><i className="iconfont icon-arrow-right right"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
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
