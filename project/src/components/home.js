import React, { Component } from 'react';


import axios from 'axios';
import Search from './search'
import Header from './header'
import Footer from './footer'
import Coupon from './coupon'
import ShoppingCart from './ShoppingCart'
import Cdn from './cdn'
import List from './list'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Home extends Component {
  constructor(){
    super();
    this.state={
      films:[]
    }
  }

  render() {
    return (
      <div>
        <Search></Search>
        <Header></Header>
        <Footer></Footer>
        <Coupon></Coupon>
        <Cdn></Cdn>
        <List></List>
      </div>
     
        
     
    );
  }
}

export default Home;
