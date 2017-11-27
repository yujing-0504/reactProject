import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import './enjoy.css'

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
    var props = this.props
    return(
      <div className="enjoy">
           {
           props.enjoyList.map((item, index)=>{
                  return (
                    <div key={index}>
                       <div className="title">
                          <p className="label_left"></p>
                          <div className="label">{item.txt}</div>
                          <p className="label_right"></p>
                        </div>
                        {
                          // this.state.img.map((item,index)=>{
                          //   return(
                          //       <a href="#" className="topImg" key={index}>
                          //          <img src={item.cover}/>
                          //       </a>
                          //     )
                          // })
                          
                        }
                      
                    </div>
                  );
                })
          }
       
         
       
      </div>

    );
  }
}
const mapStateToProps = (state)=>{
  return {
    enjoyList: state.enjoyList
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    Listaa:function(data){
     axios.get("/api/index/index?_=1511765699828").then((res) => {
      console.log(res.data.data.complex);
          
          dispatch({
            type:"LIST",
            payload:res.data.data.complex

          })

    })
   }
  }
  
    
  }
const EnjoyUI = connect(mapStateToProps, mapDispatchToProps)(Enjoy);
export default EnjoyUI;
//export default Enjoy;