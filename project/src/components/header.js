import React,{Component} from 'react'
import './header.css'
import axios from "axios";
class Header extends Component {
	constructor() {
		super();
		this.state = {
			headerData: []
		}
	}
	componentDidMount() {
		var that = this;
		axios.get("/api/menu/homeChannel?_=1511759712160").then(res => {
			console.log(res.data);
			that.setState({
				headerData: res.data.data
			})
		})
	}
	render() {

		return(
			<div className="header">
				<ul>
					{
					 this.state.headerData.map((item, index)=>{
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
export default Header;