import React,{Component} from 'react';
import {connect} from  'react-redux';
import './addCart.css'
import axios from "axios";

class AddCart extends Component {
	
	render() {
		var props = this.props
		return(
			<div className="addcart">
				添加
			</div>
			
		)
	}
}

export default AddCart;
