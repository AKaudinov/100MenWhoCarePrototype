import {combineReducers} from 'redux';
import contact from './contactReducer';
import fetchCallsInProgress from './fetchStatusReducer';

const rootReducer = combineReducers({
   contact,
   fetchCallsInProgress
});

export default rootReducer;