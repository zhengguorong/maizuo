import React, { useContext } from 'react';
import './SideBar.scss';
import { useHistory } from 'react-router';
import AppContext from '../../AppContext';

function SideBar() {
  const context = useContext(AppContext);
  const { isShowSideBar = false, toggleSideBar } = context;
  let history = useHistory();

  return (
    <aside className="application-sidebar">
      <div
        className="sidebar-container sidebar-transition"
        style={
          isShowSideBar ? { opacity: 1, zIndex: 99 } : { opacity: 0, zIndex: -1 }
        }
      >
        <div className="sidebar-overlay" onClick={toggleSideBar}>
          <nav
            className="leftNav-transition"
            style={isShowSideBar ? { right: 110 + 'px' } : { right: 320 + 'px' }}
          >
            <ul>
              <li onClick={() => history.push('/')}>
                <a>
                  <span>首页</span>
                  <i className="iconfont icon-arrow-right right"></i>
                </a>
              </li>
              <li onClick={() => history.push('film')}>
                <a>
                  <span>影片</span>
                  <i className="iconfont icon-arrow-right right"></i>
                </a>
              </li>
              <li onClick={() => history.push('cinema')}>
                <a>
                  <span>影院</span>
                  <i className="iconfont icon-arrow-right right"></i>
                </a>
              </li>
              <li onClick={() => history.push('login')}>
                <a>
                  <span>我的</span>
                  <i className="iconfont icon-arrow-right right"></i>
                </a>
              </li>
              <li onClick={() => history.push('card')}>
                <a>
                  <span>卖座网查询</span>
                  <i className="iconfont icon-arrow-right right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
export default SideBar;
