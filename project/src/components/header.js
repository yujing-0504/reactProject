import React,{Component} from 'react';
import {connect} from  'react-redux';
import './header.css'
import axios from "axios";

class Header extends Component {
	componentDidMount() {
		this.props.headaa()
	}
	render() {
		var props = this.props
		return(
			<div className="header">
				<ul>
					{
					props.headList.map((item, index)=>{
			            return (
			             <li key={index}>{item.title}</li>
			            );
			          })
					}
				</ul>
			</div>
			
		)
	}
}
const mapStateToProps = (state)=>{
  return {
    headList: state.headList
  }
}
const mapDispatchToProps = (dispatch)=>{
		return{
			headaa:function(data){
				axios.get('/api/menu/homeChannel?_=1511765699830').then((res)=>{
					console.log(res.data.data)
					console.log("aaa")
					dispatch({
						type:"HEADER",
						payload:res.data.data

					})
					
				})
			}
		}
	}
const HeaderUI = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderUI;

