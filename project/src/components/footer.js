
import React, {Component} from 'react'
import ShoppingCart from './ShoppingCart'
import './footer.css'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Switch,
  Redirect
} from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
        <div className="footer">
        <ul>
           <li>
          <Link to='./ShoppingCart'>
            <i className="iconfont">&#xe62b;</i><br/>
            <span>首页</span>
          </Link>
        </li>
          <li>
          <Link to='./ShoppingCart'>
            <i className="iconfont">&#xe68d;</i><br/>
            <span>分类</span>
          </Link>
        </li>
         <li>
          <Link to='./ShoppingCart'>
            <i className="iconfont">&#xe601;</i><br/>
            <span>约惠</span>
          </Link>
        </li>
         <li>
          <Link to='./ShoppingCart'>
            <i className="iconfont">&#xe68c;</i><br/>
            <span>购物车</span>
          </Link>
        </li>
         <li>
          <Link to='./ShoppingCart'>
            <i className="iconfont">&#xe60d;</i><br/>
            <span>我的</span>
          </Link>
        </li>
        </ul>
       
         
        </div>
      )
  }
}
export default Footer


//trunl接收一个回调函数作为参数