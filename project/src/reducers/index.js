import {combineReducers} from 'redux';
import ListReducer from './ListReducer'
import HeaderReducer from './HeaderReducer'
// combineReducers合并多个reducers
const reducers = combineReducers({
	list: ListReducer,
	headList:HeaderReducer
})

export default reducers;