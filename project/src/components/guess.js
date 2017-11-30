import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import './guess.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Guess extends Component {
  componentDidMount() {
    this.props.guessaa();
   
  }
  render(){
    var props = this.props
  	return(
  		<div className="guess">
  			<div className="title">
          <p className="label_left"></p>
          <div className="label">猜你喜欢</div>
          <p className="label_right"></p>
        </div>
         <div className="searchList" >
        
          {
             props.guessList.map((item,index)=>{
                return(
                        <Link to={'/detail/'+item.goods_id} key={index}>

                        <dl className="style1" >
                          <dt>
                            <span>
                              <img src={item.cover_image}/>
                           </span>
                          </dt>
                          <dd>
                             <span>
                              <strong>{item.goods_show_name}</strong>
                              <em>{item.goods_show_desc}</em>
                            </span>
                            <div>
                              <span>
                                <strong>￥{item.price}</strong>
                                <em>
                                  <i>无敌价</i>
                                </em>
                              </span>
                                <img src="/images/shopping.png"/>
                            </div>
                            <p>{item.add_cart_num}人已加入购物车</p>
                          </dd>
                        </dl>
                    </Link>
                  );
              })
        }

        </div>
  		</div>
  		)
  }
}
const mapStateToProps = (state)=>{
  return {
    guessList: state.guessList
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    guessaa:function(data){
     axios.get("/api/index/getGuess?_=1511831373336").then((res) => {
      console.log(res.data);
          dispatch({
            type:"GUESS",
            payload:res.data.data.list
          })
    })
   }
  }
}
const GuessUI = connect(mapStateToProps, mapDispatchToProps)(Guess);
export default GuessUI;
//export default Enjoy;