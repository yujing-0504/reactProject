import React,{Component} from 'react';
import {connect} from  'react-redux';
import './login.css'
import axios from "axios";
import {createBrowserHistory} from 'history'
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

class Login extends Component {
	
	conponentDidMount(){
		
	}
	login(){
		 var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        	})
        
    axios.post('/users/login', {
            username: document.querySelector('#username').value,
            psw: document.querySelector('#psw').value
        })
            .then((res) => {
                if (res.data.code === 1) {
                    //alert(res.data.message);
                    //return;
                    history.push('./home')
                }
                else{
                	alert(res.data.message)
                	return;
                }
                document.cookie = 'username=' + document.querySelector('#username').value + ';path=/';
                history.push('/home')//登录成功刷新界面
                alert('登录成功')
            })
    }

	render() {
		var props = this.props
		return(
			<div className="login">
				 <input type="number" id="username" placeholder="请输入手机号" autoComplete="off" className="shoujihao"/>
		          <input type="password" id="psw" placeholder="请输入图形验证码" autoComplete="off" className="yanzhengma"/>
		          <img  className="tupian"/>
		          <input type="text" name="code" placeholder="请输入短信验证码" autoComplete="off" className="yanzhengma2"/>
		          <span className="huoqu">获取短信验证码</span>
		          <input type="button" className="denglu" value="登陆" onClick={()=>this.login()}/><br/>
		          <Link to="./register" >
		          	点此注册
		          </Link>
			</div>
		)
	}
}

export default Login;









