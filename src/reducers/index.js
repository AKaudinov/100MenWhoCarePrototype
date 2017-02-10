import {combineReducers} from 'redux';
import contactUsResult from './contactUsResultReducer';
import fetchCallsInProgress from './fetchStatusReducer';
import contacts from './contactsReducer';
import gallery from './galleryReducer';

const rootReducer = combineReducers({
   contactUsResult,
   contacts,
   gallery,
   fetchCallsInProgress
});

export default rootReducer;