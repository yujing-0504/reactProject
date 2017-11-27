import React, { Component } from 'react';


import axios from 'axios';
import Search from './search'
import Header from './header'
import Footer from './footer'
import ShoppingCart from './ShoppingCart'
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
      </div>
     
        
     
    );
  }
}

export default Home;
