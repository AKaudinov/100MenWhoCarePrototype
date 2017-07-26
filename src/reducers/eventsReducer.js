import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function eventsReducer(state = initialState.events, action){
    switch (action.type){
        case actionTypes.EVENT_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                eventSubmitSuccessMessage: action.message,
                eventSubmitErrorMessage: ''
            });
        case actionTypes.EVENT_SUBMIT_FAILURE:
            return Object.assign({}, state, {
                eventSubmitSuccessMessage: '',
                eventSubmitErrorMessage: action.err
            });
        //will later also set up for actual event collection, to populate all events here, and if retrieval fails
            //populate dataRetrieveError property of the events object.
        default:
            return state;
    }
}






//import * as actionTypes from '../actions/actionTypes';
//import initialState from './initialState';
//
////will need to be removed
//export default function contactUsResultReducer(state = initialState.contactUsResult, action) {
//    switch (action.type) {
//        case actionTypes.CONTACT_SUBMIT_SUCCESS:
//            return Object.assign({}, state,
//                {
//                    successfulMessage: action.message,
//                    messageSendError: ''
//                });
//        case actionTypes.CONTACT_SUBMIT_FAILURE:
//            return Object.assign({}, state, {
//                successfulMessage: '',
//                messageSendError: action.err
//            });
//        default:
//            return state;
//    }
//}