import {combineReducers} from 'redux';
import ListReducer from './ListReducer';
import HeaderReducer from './HeaderReducer';
import GuessReducer from './GuessReducer';
import PhotoReducer from './PhotoReducer';
import IntroduceReducer from './IntroduceReducer';
import ProductReducer from './ProductReducer' 
// combineReducers合并多个reducers
const reducers = combineReducers({
	enjoyList: ListReducer,
	headList:HeaderReducer,
	guessList:GuessReducer,
	photoList:PhotoReducer,
	IntroduceList:IntroduceReducer,
	ProductList:ProductReducer
})

export default reducers;