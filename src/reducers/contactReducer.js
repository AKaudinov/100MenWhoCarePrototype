import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


export default function contactReducer(state = initialState.contactSubmissionError, action) {
    //let status = '';
    switch (action.type) {
        //case actionTypes.CONTACT_SUBMIT_SUCCESS:
        //    status = 'success';
        //    break;
        case actionTypes.CONTACT_SUBMIT_FAILURE:
            //status = 'failed';
            return action.contactSubmissionError;
        default:
            return state;
    }
    //return status;
}