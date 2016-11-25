import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function contactsReducer(state = initialState.contacts, action){
    switch(action.type){
        case actionTypes.CONTACTS_RETURN_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                receivedError: ''
            });
        case actionTypes.CONTACTS_RETURN_FAILURE:
            return Object.assign({}, state, {
                data: [],
                receivedError: action.err
            });
        default:
            return state;
    }
}