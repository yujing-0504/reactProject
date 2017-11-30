import React,{Component} from 'react';
import './register.css'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Switch,
  Redirect
} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import axios from "axios";
class Register extends Component{
   constructor() {
        super();
        this.register = this.register.bind(this);
    }
    register() {
       
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
        if(document.querySelector('#username').value.length < 11){
            alert('请重新确认手机号');
            return;
        }
       
        axios.post('/users/register', {
            username: document.querySelector('#username').value,
            psw: document.querySelector('#psw').value
        })
            .then((res) => {
                if (res.data.code !== 1) {
                    alert(res.data);
                    return;
                }
                history.push('./login')//注册成功跳转到登录页
                alert('注册成功')
            })

    }
  render(){
    return(
        <div className="register">
         	  <input type="number" id="username" name="mobile" placeholder="请输入手机号" autoComplete="off" className="shoujihao"/>
	          <input type="password" id="psw" name="captcha" placeholder="请输入密码" autoComplete="off" className="password"/>
	          <input type="button" className="denglu" value="注册" onClick={()=>this.register()}/><br/>
	          <Link to="./login" >
	          	点此注册
	          </Link>
        </div>
      )
  }
}
export default Register


//trunk接收一个回调函数作为参数