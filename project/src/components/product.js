import React,{Component} from 'react';
import {connect} from  'react-redux';
import './introduce.css'
import axios from "axios"

class Product extends Component {
	componentDidMount() {
		this.props.introducebb();
	}
	render() {
		var props = this.props
		
		
		return(
			<div>
				<div className="product">
					<dl className="more-property detail-content">
	                <dt>产品规格</dt>
	                {
		                props.ProductList.map((item,index)=>{
		                	return(
			                <dd key={index}>
			                    <span className="prop-name">{item.key}</span>
			                    <span className="prop-value">{item.value}</span>

			                </dd>
		              	  )
		                })

	                }
	            </dl>
	            <div className="advertisement">
	                <a className="advertisement-coupon" href="/get-coupon.html?activity_id=350">
	                    <img src="http://img.cdn.daling.com/data/files/mobile/2017/11/23/1511419942270.png" />
	                </a>

	            </div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state)=>{
  return {
   ProductList: state.ProductList
  }
}
const mapDispatchToProps = (dispatch)=>{
		return{
			introducebb:function(data){
				axios.get('/api/goods/detail?goods_id=305924&_=1511930560817').then((res)=>{
					console.log(res.data.data.more_property)
					console.log("product")
					dispatch({
						type:"PRODUCT",
						payload:res.data.data.more_property

					})
					
				})
			}
		}
	}
const ProductUI = connect(mapStateToProps, mapDispatchToProps)(Product);


export default ProductUI;

