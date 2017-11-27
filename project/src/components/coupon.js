import React,{Component} from 'react'
import './coupon.css';
import axios from "axios";

class Coupon extends Component {
	constructor() {
		super();
		this.state = {
			couponData: []
		}
	}
	componentDidMount() {
		var that = this;
		axios.get("/api/index/index?_=1511763945402").then(res => {
			console.log(res.data);
			that.setState({
				couponData: res.data.data.activity_list
			})
		})
	}
	render() {

		return(
			<div className="coupon">
				<ul>
					{
					 this.state.couponData.map((item, index)=>{
			            return (
			              <img src={item.image_url} key={index}/>
			            );
			          })
					}
				</ul>
			</div>
		)
	}
}
export default Coupon;