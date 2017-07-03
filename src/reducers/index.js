import {combineReducers} from 'redux';
import contactUsResult from './contactUsResultReducer';
import fetchCallsInProgress from './fetchStatusReducer';
import contacts from './contactsReducer';
import gallery from './galleryReducer';
import events from './eventsReducer';

const rootReducer = combineReducers({
   contactUsResult,
   contacts,
   gallery,
   events,
   fetchCallsInProgress
});

export default rootReducer;