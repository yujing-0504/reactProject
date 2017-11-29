import React ,{Component} from 'react'
import './shoppingCart.css'
export default class ShoppingCart extends Component{
	render(){
		return(
			<div className="shoppingcart">
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