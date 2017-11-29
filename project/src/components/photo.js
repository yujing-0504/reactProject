import React,{Component} from 'react';
import {connect} from  'react-redux';
import './photo.css'
import axios from "axios";
import Introduce from './introduce'
import Product from './product'
class Photo extends Component {
	componentDidMount() {
		this.props.photoaa()
	}
	render() {
		var props = this.props
		//var arr  = props.photoList.length ? this.props.photoList.coin : [];
		
		console.log(props.photoList)
		return(
			<div className="photo">
				{
				//props.photoList.map((item, index)=>{
		           //return (
						<div className="detailInfo" >
							<img className="imgP" src="http://img.daling.com/data/files/mobile/2017/09/29/15066649585320.jpg" />
							<div className="detail-prop">
								<div className="detail-prop-info">
									<div className="goods_name">{props.photoList.goods_title}</div>
									<div className="goods-price">
										<span className="price-new">￥{props.photoList.price}</span>
										<span className="price-tag">无敌价</span>
										<span className="price-market">
						                    {props.photoList.country}限时售价
						                    <span className="price">￥{props.photoList.market_price}.00</span>
										</span>
									</div>
								</div>

							</div>
							<div className="detail-coin">
									<div className="clearfix">
							            <span className="coin-tag">返</span>
							            <span className="coin-text">
							                
							            </span>
							            <span className="icon-dal icon-help" data-coin-info="赠送达令币数量为该商品金额的50%，达令币可用于支付时直接抵现使用。">
							            </span>
									</div>
								</div>
							<Introduce></Introduce>
							<Product></Product>
							
						</div>		            
					//);
		          //})
				}
			</div>
			
		)
	}
}
const mapStateToProps = (state)=>{
  return {
    photoList: state.photoList
  }
}
const mapDispatchToProps = (dispatch)=>{
		return{
			photoaa:function(){
				axios.get('/api/goods/detail?goods_id=305924&_=1511863545339').then((res)=>{
					console.log(res.data.data)
					dispatch({
						type:"PHOTO",
						payload:res.data.data
					})
				})
			}
		}
	}
const PhotoUI = connect(mapStateToProps, mapDispatchToProps)(Photo);
export default PhotoUI;

