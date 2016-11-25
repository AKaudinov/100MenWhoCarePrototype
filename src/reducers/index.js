import {combineReducers} from 'redux';
import contactUsResult from './contactUsResultReducer';
import fetchCallsInProgress from './fetchStatusReducer';
import contacts from './contactsReducer';

const rootReducer = combineReducers({
   contactUsResult,
   contacts,
   fetchCallsInProgress
});

export default rootReducer;