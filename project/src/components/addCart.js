import React,{Component} from 'react';
import {connect} from  'react-redux';
import './addCart.css'
import axios from "axios";
import {
	BrowserRouter as Router,
	Route,
	Link,
  Switch,
  Redirect
} from 'react-router-dom'
class AddCart extends Component {
	
	render() {
		var props = this.props
		var match = this.props.match
		return(
			<div className="addcart">
				<div className="detail-bar border-top">
				    <Link to='../ShoppingCart'>
				        <span className="icon-dal icon-cart">
				        	<i className="iconfont">&#xe68c;</i>
				        </span>
				        <span className="cart-num">1</span>
				    </Link>
				    
				        
				        <a className="buy-btn">立即购买</a>
				        <a className="cart-btn">加入购物车</a>
				        
				    
				</div>
			</div>
			
		)
	}
}

export default AddCart;

