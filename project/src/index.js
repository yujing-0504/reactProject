import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import header from './components/header'
import {createStore} from 'redux'
import reducers from './reducers/index'
import {Provider} from 'react-redux'

const store = createStore(reducers,{})
function renderpage(){
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderpage()
store.subscribe(renderpage)
registerServiceWorker();
