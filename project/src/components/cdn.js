import React,{Component} from 'react'
import './cdn.css';
import axios from "axios";

class Cdn extends Component {
	
	render() {

		return(
			<div className="cdn">
				<ul>
					<li>
						<img src="/images/baoshuiqu.png"/>
					</li>
					<li>
						<img src="/images/baobaotuan.png"/>
					</li>
					<li>
						<img src="/images/mingpintuna.png"/>
					</li>
					<li>
						<img src="/images/qiandao.png"/>
					</li>
					<li>
						<img src="/images/guojiaguan.png"/>
					</li>
				</ul>
			</div>
		)
	}
}
export default Cdn;