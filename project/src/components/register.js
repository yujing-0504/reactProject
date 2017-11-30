import React,{Component} from 'react';
import './register.css'
import {
	BrowserRouter as Router,
	Route,
	Link,
    Switch,
    Redirect
} from 'react-router-dom'

class Register extends Component{
  render(){
    return(
        <div className="register">
         	  <input type="number" id="username" name="mobile" placeholder="请输入手机号" autoComplete="off" className="shoujihao"/>
	          <input type="password" is="psw" name="captcha" placeholder="请输入密码" autoComplete="off" className="password"/>
	          <input type="button" className="denglu" value="注册"/><br/>
	          <Link to="./login" >
	          	点此注册
	          </Link>
        </div>
      )
  }
}
export default Register


//trunk接收一个回调函数作为参数