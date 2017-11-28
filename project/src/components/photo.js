import React ,{Component} from 'react'
import './detail.css'


export default class Photo extends Component{
  render(){
    return(
      <div className="photo">
       	<div className="detailInfo">
       		<img className="imgP" src="http://img.daling.com/data/files/mobile/2017/09/29/15066649585320.jpg"/>
       	</div>
      </div>
      )
  }
}
