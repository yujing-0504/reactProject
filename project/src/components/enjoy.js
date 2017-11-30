import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import './enjoy.css'
import Detail from './detail'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Enjoy extends Component {

  componentDidMount() {
    this.props.Listaa();

  }

  render() {
    // var props = this.props
    var arr  = this.props.enjoyList.length ? this.props.enjoyList[0].list : [];
    var arr1 = this.props.enjoyList.length ? this.props.enjoyList[1].list : [];
    var arr2 = this.props.enjoyList.length ? this.props.enjoyList[2].list : [];
    var arr3 = this.props.enjoyList.length ? this.props.enjoyList[3].list : [];
    var arr4 = this.props.enjoyList.length ? this.props.enjoyList[4].list : [];
    var arr5 = this.props.enjoyList.length ? this.props.enjoyList[5].list : [];
    // console.log(arr5)
    return(
      <div className="enjoy">
        <div className="center">
           <div className="title">
              <p className="label_left"></p>
              <div className="label">新客专享</div>
              <p className="label_right"></p>
             </div>
              {
                   arr.map((item, index)=>{
                   return (
                    <div className="img" key={index}>
                       <img src={item.list[0].cover} />
                       <div className="title">
                          <p className="label_left"></p>
                          <div className="label">{item.list[0].end_time}结束</div>
                          <p className="label_right"></p>
                       </div>
                    </div>
                   )
                 })
                }
           
        </div>
        <div className="center1">
           <div className="title">
              <p className="label_left"></p>
              <div className="label">大牌口红</div>
              <p className="label_right"></p>
            </div>
              {
                   arr1.map((item, index)=>{
                   return (
                    <div className="img" key={index}>
                       <img src={item.list[0].cover} key={item.icon}/>
                        <div className="title">
                          <p className="label_left"></p>
                          <div className="label">{item.list[0].end_time}结束</div>
                          <p className="label_right"></p>
                       </div>
                    </div>
                    
                   )
                 })
                }
            
        </div>
        <div className="center2">
           <div className="title">
              <p className="label_left"></p>
              <div className="label">11.27-11.29超级单品团</div>
              <p className="label_right"></p>
            </div>
              {
                   arr2.map((item, index)=>{
                   return (
                    <div className="img" key={index}>
                       <img src={item.list[0].cover} key={item.icon}/>
                        <div className="title">
                          <p className="label_left"></p>
                          <div className="label">{item.list[0].end_time}结束</div>
                          <p className="label_right"></p>
                       </div>
                    </div>
                    
                   )
                 })
                }
            
        </div>
         <div className="center3">
           <div className="title">
              <p className="label_left"></p>
              <div className="label">11.25-11.28进行的活动</div>
              <p className="label_right"></p>
            </div>
              {
                   arr3.map((item, index)=>{
                   return (
                    <div className="img" key={index}>
                       <img src={item.list[0].cover} key={item.icon}/>
                        <div className="title">
                          <p className="label_left"></p>
                          <div className="label">{item.list[0].end_time}结束</div>
                          <p className="label_right"></p>
                       </div>
                    </div>
                    
                   )
                 })
                }
            
        </div>
        <div className="center4">
           <div className="title">
              <p className="label_left"></p>
              <div className="label">达令帮活动</div>
              <p className="label_right"></p>
            </div>
              {
                   arr4.map((item, index)=>{
                   return (
                    <div className="img" key={index}>
                       <img src={item.list[0].cover} key={item.icon}/>
                        <div className="title">
                          <p className="label_left"></p>
                          <div className="label">{item.list[0].end_time}结束</div>
                          <p className="label_right"></p>
                       </div>
                    </div>
                    
                   )
                 })
                }
            
        </div>
        <div className="center5">
           <div className="title">
              <p className="label_left"></p>
              <div className="label">今日新品 早8点已上架</div>
              <p className="label_right"></p>
            </div>  
              {
                   arr5.map((item, index)=>{

                   return (
                    <div className="goods_one" key={index}>
                      <div className="goodsBlock">
                      <Link to={'/detail/'+item.goods_id}>
                        <div className="goods">
                          
                            <img src={item.cover_image} key={index}/>
                            <div className="goods-title">{item.title_desc}</div>
                            <div className="goods-desc">{item.short_goods_name}</div>
                            <div className="price-block">￥{item.price}</div>
                            <div className="cart-btn">
                            <div className="cart-btn-desc">
                              <div className="cart-num">{item.add_cart_num}人</div>
                              <div>加入购物车</div>
                            </div>
                            <div className="icon-car">
                              <img src="/images/shoppingCart.png"/>
                            </div>
                          </div>
                        

                        </div>
                          </Link>
                      </div>   
                    </div>
                    
                   )
                 })
                }
            
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    enjoyList: state.enjoyList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    Listaa: function(data) {
      axios.get("/api/index/index?_=1511765699828").then((res) => {
        console.log(res)
        dispatch({
          type: "LIST",
          payload: res.data.data.complex
        })

      })
    }
  }

}
const EnjoyUI = connect(mapStateToProps, mapDispatchToProps)(Enjoy);
export default EnjoyUI;
//export default Enjoy;

// {
//            props.enjoyList.map((item, index)=>{
//                   return (
//                     <div key={index}>
//                        <div className="title">
//                           <p className="label_left"></p>
//                           <div className="label"></div>
//                           <p className="label_right"></p>
//                         </div>
//                         {
//                           // this.state.img.map((item,index)=>{
//                           //   return(
//                           //       <a href="#" className="topImg" key={index}>
//                           //          <img src={item.cover}/>
//                           //       </a>
//                           //     )
//                           // })

//                         }

//                     </div>
//                   );
//                 })
//           }