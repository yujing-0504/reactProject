import {combineReducers} from 'redux';
import ListReducer from './ListReducer';
import HeaderReducer from './HeaderReducer';
import GuessReducer from './GuessReducer';
// combineReducers合并多个reducers
const reducers = combineReducers({
	enjoyList: ListReducer,
	headList:HeaderReducer,
	guessList:GuessReducer
})

export default reducers;