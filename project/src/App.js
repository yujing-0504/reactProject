import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Search from './components/search'
import Header from './components/header'
import Footer from './components/footer'
import ShoppingCart from './components/ShoppingCart'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
  constructor(){
    super();
    this.state={
      films:[]
    }
  }
  
  render() {
    return (
      <div className="App">
        <Search></Search>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
