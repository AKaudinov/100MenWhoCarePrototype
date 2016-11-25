import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

//will need to be removed
export default function contactUsResultReducer(state = initialState.contactUsResult, action) {
    switch (action.type) {
        case actionTypes.CONTACT_SUBMIT_SUCCESS:
            return Object.assign({}, state,
                {
                   successfulMessage: action.message,
                    messageSendError: ''
                });
        case actionTypes.CONTACT_SUBMIT_FAILURE:
            return Object.assign({}, state, {
                successfulMessage: '',
                messageSendError: action.err
            });
        default:
            return state;
    }
}