import React, { Component } from 'react';


import axios from 'axios';
import Search from './search'
import Enjoy from './enjoy'
import Guess from './guess'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class List extends Component {
  constructor(){
    super();
    this.state={
      films:[]
    }
  }

  render() {
    return (
      <div>
       <Enjoy></Enjoy>
       <Guess></Guess>
      </div>
     
        
     
    );
  }
}

export default List;
