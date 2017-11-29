import React,{Component} from 'react';
import {connect} from  'react-redux';
import './login.css'
import axios from "axios";

class Login extends Component {
	render() {
		var props = this.props
		return(
			<div className="login">
				 <input type="number" name="mobile" placeholder="请输入手机号" autoComplete="off" className="shoujihao"/>
		          <input type="text" name="captcha" placeholder="请输入图形验证码" autoComplete="off" className="yanzhengma"/>
		          <img  className="tupian"/>
		           <input type="text" name="code" placeholder="请输入短信验证码" autoComplete="off" className="yanzhengma2"/>
		          <span className="huoqu">获取短信验证码</span>
		          <input type="button" className="denglu" value="登陆"/>
			</div>
		)
	}
}

export default Login;









