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
        case actionTypes.EVENT_RETURN_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                dataRetrieveError: ''
            });
        case actionTypes.EVENT_RETURN_FAILURE:
            return Object.assign({}, state, {
                data: [],
                dataRetrieveError: action.err
            });
        default:
            return state;
    }
}