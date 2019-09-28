/**
 * Created by zhengguorong on 16/7/1.
 */
import React from 'react'
import './Login.less'

class Login extends React.Component {
  render() {
    return (
      <section className="login-view">
        <form>
          <div className="form-group">
            <input type="text" name="username" className="form-control" placeholder="请输入手机/邮箱"/>
            <div className="input-bg"></div>
          </div>
          <div className="form-group">
            <input type="text" name="password" className="form-control" placeholder="请输入密码"/>
            <div className="input-bg"></div>
          </div>
          <button type="submit" className="submit">登录</button>
        </form>
      </section>
    )
  }
}
export default Login
