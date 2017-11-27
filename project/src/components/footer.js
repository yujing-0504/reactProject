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
         <Link to='./ShoppingCart'>sfsd</Link>
         
        </div>
      )
  }
}
export default Footer
//trunl接收一个回调函数作为参数