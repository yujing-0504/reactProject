import React, { Component } from 'react';


import axios from 'axios';
import './enjoy.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Enjoy extends Component {
  constructor() {
    super();
    this.state = {
      enjoy: []
    }
  }
  componentDidMount() {
    var that = this;
    axios.get("/api/index/index?_=1511765699828").then(res => {
      console.log(res.data.data.complex);

      that.setState({
        enjoy: res.data.data.complex,
         img:res.data.data.complex
      })

    })
  }

  render() {
    return(
      <div className="enjoy">
           {
           this.state.enjoy.map((item, index)=>{
                  return (
                    <div key={index}>
                       <div className="title">
                          <p className="label_left"></p>
                          <div className="label">{item.txt}</div>
                          <p className="label_right"></p>
                        </div>
                        {
                          this.state.img.map((item,index)=>{
                            return(
                                <a href="#" className="topImg" key={index}>
                                   <img src={item.cover}/>
                                </a>
                              )
                          })
                          
                        }
                      
                    </div>
                  );
                })
          }
       
         
       
      </div>

    );
  }
}

export default Enjoy;