import React ,{Component} from 'react'
import './search.css'
import axios from 'axios'
export default class Search extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="search">
				<input type="search" placeholder="搜索商品"/>
			</div>
			)
	}
}