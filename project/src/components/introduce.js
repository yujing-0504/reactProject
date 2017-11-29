import React,{Component} from 'react';
import {connect} from  'react-redux';
import './introduce.css'
import axios from "axios"

class Introduce extends Component {
	
	render() {
		var props = this.props
		return(
			<div className="introduce">
				<ul className="detail-tab-list border-bottom">
			        <li className="active">图文详情</li>
			        <li>服务承诺</li> 
				 </ul>	
				<div className="special active detail-content">
					<dl>

						<dt>产品展示 </dt>
						<dd>
							“说到洗面奶不得不提人手一只的SENKA珊珂绵润泡沫洁面乳，卸妆力够强、清洁力够强，保湿力也是妥妥的，温和不刺激，不用很多量，‘就能打出好多泡泡’更将肌肤中的污垢洗得相当干净，‘清完清清爽爽，没有紧绷感，非常舒服哟~’，一款使用久，男女都能用的洁面乳。”
						</dd>

						<div className="clearfix layout-3">

							<div className="img" >
								<img src="/images/3-1.jpg"/>
							</div>

							<div className="img" >
								<img src="/images/3-2.jpg"/>
							</div>

							<div className="img">
								<img src="/images/3-3.jpg"/>
							</div>

						</div>

						<dt>特别之处</dt>
						<dd>
							“SENKA珊珂绵润泡沫洁面乳加入从蚕茧中提取的保湿成分，让原本很舒适的泡沫，更加滋润浓密~丝胶成分易于贴合肌肤，形成保护膜，使用后的肌肤更加光滑水润，还能软化角质，避免毛孔阻塞，令肌肤长久保持健康状态。”
						</dd>

						<div className="clearfix layout-2">

							<div className="img" >
								<img src="/images/4-1.jpg"/>
							</div>

							<div className="img" >
								<img src="/images/4-2.jpg"/>
							</div>

							<div className="img">
								<img src="/images/4-3.jpg"/>
							</div>

							<div className="img">
								<img src="/images/4-4.jpg"/>
							</div>

						</div>

						<dt>使用方法 </dt>
						<dd>
							挤出适量洁面乳，加水在掌心打出泡沫，再按摩全脸，最后用清水洗净即可。
						</dd>

						<dt> 注意事项</dt>
						<dd>
							1.产品成分各有不同，请测试后再使用； 2.具体期限以商品标示期限为准； 3.商品均为实物拍摄，因拍摄中会受到光线、环境等无法控制的影响，包括显示设置、角度等问题，不免会有色差，请以实物为准，请您谅解！
						</dd>

					</dl>
				</div>
				<dl className="more-property detail-content">
                <dt>产品规格</dt>
                
                <dd>
                    <span className="prop-name">产地</span>
                    <span className="prop-value">日本</span>
                </dd>
                
                <dd>
                    <span className="prop-name">保质期限</span>
                    <span className="prop-value">3年</span>
                </dd>
                
                <dd>
                    <span className="prop-name">储藏方式</span>
                    <span className="prop-value">阴凉避光存储</span>
                </dd>
                
                <dd>
                    <span className="prop-name">品牌</span>
                    <span className="prop-value">SENKA/珊珂</span>
                </dd>
                
                <dd>
                    <span className="prop-name">功效</span>
                    <span className="prop-value">保湿/深层清洁/清洁毛孔</span>
                </dd>
                
                <dd>
                    <span className="prop-name">生产日期</span>
                    <span className="prop-value">见产品外包装</span>
                </dd>
                
                <dd>
                    <span className="prop-name">品名</span>
                    <span className="prop-value">SENKA珊珂绵润泡沫洁面乳 120g*2</span>
                </dd>
                
                <dd>
                    <span className="prop-name">规格</span>
                    <span className="prop-value">120g*2</span>
                </dd>
                
                <dd>
                    <span className="prop-name">适合肤质</span>
                    <span className="prop-value">任何肤质</span>
                </dd>
                
                <dd>
                    <span className="prop-name">主要成分</span>
                    <span className="prop-value">丝胶蛋白/水解蚕丝蛋白/玻尿酸钠/乙基玻尿酸钠</span>
                </dd>
                
            </dl>
            <div className="advertisement">
                
                
                <a className="advertisement-coupon" href="/get-coupon.html?activity_id=350">
                    <img src="http://img.cdn.daling.com/data/files/mobile/2017/11/23/1511419942270.png" />
                </a>
                
                
            </div>
			</div>
		)
	}
}

export default Introduce;

