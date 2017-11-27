import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Search from './components/search'
import Header from './components/header'
import Footer from './components/footer'
import ShoppingCart from './components/ShoppingCart'
import Home from './components/home'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
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
       <Router>
            <div className="App">
              
                <Switch>
                  <Redirect exact from="/" to="/home"/>
                  <Route path='/ShoppingCart' component={ShoppingCart}/>
                   <Route path='/' component={Home}/>
                </Switch>
             
            </div>
          </Router>
     
     
    );
  }
}

export default App;
