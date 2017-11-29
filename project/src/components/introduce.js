import React,{Component} from 'react';
import {connect} from  'react-redux';
import './introduce.css'
import axios from "axios"
import Product from './product'

class Introduce extends Component {
	componentDidMount() {
		this.props.introduceaa();
	}
	render() {
		//var props = this.props
		var arr  = this.props.IntroduceList.length ? this.props.IntroduceList[0] : [];
		var arr1  = this.props.IntroduceList.length ? this.props.IntroduceList[1] : [];
		var arr2  = this.props.IntroduceList.length ? this.props.IntroduceList[2] : [];
		var arr3  = this.props.IntroduceList.length ? this.props.IntroduceList[3] : [];
		var arr_0= this.props.IntroduceList.length ? this.props.IntroduceList[0].list : [];
		var arr_1 = this.props.IntroduceList.length ? this.props.IntroduceList[1].list : [];

		return(
			<div className="introduce">
		
				<ul className="detail-tab-list border-bottom">
			        <li className="active">图文详情</li>
			        <li>服务承诺</li> 
				 </ul>	
				<div className="special active detail-content">
					<dl>

						<dt>{arr.name} </dt>
						<dd>
							{arr.txt}
						</dd>

						<div className="clearfix layout-3">
						{
							arr_0.map((item,index)=>{
								return(							
								<div className="img" key={index}>
									<img src={item.image}/>
								</div>
								)
							})
						}							

						</div>

						<dt>{arr1.name}</dt>
						<dd>
							{arr1.txt}
						</dd>

						<div className="clearfix layout-2">
						{
							arr_1.map((item,index)=>{
								return(							
								<div className="img" key={index}>
									<img src={item.image}/>
								</div>
								)
							})
						}		

						</div>

						<dt>{arr2.name} </dt>
						<dd>
							{arr2.txt}
						</dd>

						<dt>{arr3.name}</dt>
						<dd>
							{arr3.txt}
						</dd>

					</dl>
				</div>
				
			</div>
		)
	}
}
const mapStateToProps = (state)=>{
  return {
    IntroduceList: state.IntroduceList
  }
}
const mapDispatchToProps = (dispatch)=>{
		return{
			introduceaa:function(data){
				axios.get('/api/goods/detail?goods_id=305924&_=1511930560817').then((res)=>{
					console.log(res.data.data)
					console.log("aaa")
					dispatch({
						type:"INTRODUCE",
						payload:res.data.data.special

					})
					
				})
			}
		}
	}
const IntroduceUI = connect(mapStateToProps, mapDispatchToProps)(Introduce);


export default IntroduceUI;

