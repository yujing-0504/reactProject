import React ,{Component} from 'react'
import ShoppingCart from './ShoppingCart'
import './footer.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends React.Component {
  render(){
    return(
      <Link to='/ShoppingCart'>
        
      </Link>
      )
  }
}

// const ShoppingCart = () => (
//   <div>
//     <h2>购物车</h2>
//   </div>
// )

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Footer = () => (
  <Router>
    <div className="footer">
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/ShoppingCart">购物车</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/ShoppingCart" component={ShoppingCart}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default Footer