import React ,{Component} from 'react'
import './detail.css'
import Guess from './guess'
import Photo from './photo'
export default class Detail extends Component{
  render(){
    return(
      <div className="detail">
        <Photo></Photo>
       
      </div>
      )
  }
}
