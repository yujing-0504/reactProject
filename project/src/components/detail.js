import React ,{Component} from 'react'
import './detail.css'
import Guess from './guess'
import Photo from './photo'
import AddCart from './addCart'
export default class Detail extends Component{
  render(){
    return(
      <div className="detail">
        <Photo></Photo>
       	<Guess></Guess>
       	<AddCart></AddCart>
      </div>
      )
  }
}
