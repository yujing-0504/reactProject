import React,{Component} from 'react';
import {connect} from  'react-redux';
import './photo.css'
import axios from "axios";
import Introduce from './introduce'
class Photo extends Component {
	componentDidMount() {
		this.props.photoaa()
	}
	render() {
		var props = this.props
		console.log('asasas')
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
									<div className="goods_name">[日本·你身边的“洁面专家”] Shiseido资生堂 珊珂绵润泡沫洁面乳 120g*2（原洗颜专科微米洗颜乳）</div>
									<div className="goods-price">
										<span className="price-new">82</span>
										<span className="price-tag">无敌价</span>
										<span className="price-market">
						                    日本限时售价
						                    <span className="price">￥104.00</span>
										</span>
									</div>
								</div>

							</div>
							<div className="detail-coin">
									<div className="clearfix">
							            <span className="coin-tag">返</span>
							            <span className="coin-text">
							                购买可获<span className="font-red">41</span>达令币
							            </span>
							            <span className="icon-dal icon-help" data-coin-info="赠送达令币数量为该商品金额的50%，达令币可用于支付时直接抵现使用。">
							            </span>
									</div>
								</div>
							<Introduce></Introduce>
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
			photoaa:function(data){
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

