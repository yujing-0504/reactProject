import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Search from './components/search'
import Header from './components/header'
import Footer from './components/footer'
import Coupon from './components/coupon'
import ShoppingCart from './components/ShoppingCart'
import Home from './components/home'
import Detail from './components/detail'
import Login from './components/login'
import Register from './components/register'
//import ShoppingCart from './components/ShoppingCart'
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
                  <Route path='/detail/:fid' component={Detail}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/register' component={Register}/>
                  <Route path='/home' component={Home}/>
                  }

                </Switch>
             
            </div>
          </Router>
     
     
    );
  }
}

export default App;
