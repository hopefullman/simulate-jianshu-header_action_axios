import {combineReducers} from 'redux';
import headerreducer from '../common/header/store/headerreducer.js';
export default combineReducers({
	header:headerreducer
})