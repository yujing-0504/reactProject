import React, {Component} from 'react';
import './shoppingCart.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {createBrowserHistory} from 'history'
import Footer from './footer'
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    NavLink,
    // Switch,
    // Redirect
} from 'react-router-dom'

class ShoppingCart extends Component {
   render(){
   	return(
   		<div className="shoppingcart">
   			<div className="shopping_title">
			    <span>我的购物车</span>
			    <em data-edit-all="">编辑 </em>
			</div>
			<div className="goods_list">
				<div className="activity_title">
			        <a href="javascript:void(0)">
			            <span>无敌价</span>
			            <p>价格无敌，手慢无</p>
			        </a>
			    </div>
			    <div className="goods_list_main">
			    	<ul>
			    		<li>
			                <strong className="goods_checked" data-goods-choose=""></strong>
			                <em data-edit-radio=""></em>
			            </li>
			            <li>
			            	<img src="http://img.daling.com/data/files/zin/2016/12/15/FA163E0BD2F9GCF93W1G64S72F2.jpg"/>
			            </li>
			            <li data-goods-detail="">
			                <p>[Kose]雪肌精水乳套装(化妆水200ml+乳液140ml)</p>
			                <em>化妆水 200ml+乳液 140ml</em>
			                <div>
			                    <strong>¥379.00</strong>
			                    <span>
			                        <a href="javascript:void(0)" className="icon-dal icon-minus" >-</a>
			                        <input type="text"  value="1"/>
			                        <a href="javascript:void(0)" className="icon-dal icon-plus" >+</a>
			                    </span>
			                </div>
			            </li>
			    	</ul>
			    </div>
			    <div className="shopping_footer" data-shopping-footer="">
				    <ul>
				        <li>
				            <strong  className="hover"><img src="/images/check.png"/></strong>
				            <em ></em>
				            全选
				        </li>
				        <li>
				        <span>
				            <strong>合计:<i>¥379.00</i></strong>
				            <strong>总额:¥379.00</strong>
				        </span>
				            <a href="javascript:void(0)" data-shopping-pay="">去结算(<i data-goods-count="">1</i>)</a>
				        </li>
				        <li>
				            <strong data-moveto-collection="">☆</strong>
				            <em data-goods-delete="">X</em>
				        </li>
				    </ul>
				</div>
			</div>
   			<Footer></Footer>
   		</div>
   		)
   }
}




export default ShoppingCart;