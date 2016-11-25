import * as actionTypes from './actionTypes';
import {beginFetch, fetchFail} from './fetchStatusActions';
//import ContactApi from '../api/mockContactApi';
import ContactApi from '../api/api';

export function contactSubmitSuccess(message) {
    return {type: actionTypes.CONTACT_SUBMIT_SUCCESS, message};
}

export function contactSubmitFailure(err) {
    return {type: actionTypes.CONTACT_SUBMIT_FAILURE, err};
}

export function contactsReturnSuccess(contacts) {
    return {type: actionTypes.CONTACTS_RETURN_SUCCESS, payload: contacts};
}

export function contactsReturnFailure(err) {
    return {type: actionTypes.CONTACTS_RETURN_FAILURE, err};
}

export function submitContactForm(contactForm) {
    return function (dispatch) {
        dispatch(beginFetch());
        return ContactApi.SendContact(contactForm)
            .then(message => {
                dispatch(contactSubmitSuccess(message));
            }).catch(err => {
                dispatch(fetchFail());
                dispatch(contactSubmitFailure(err));
                //throw(error);
            });
    };
}


export function getAllContacts() {
    return dispatch => {
        dispatch(beginFetch());
        return ContactApi.GetAllContacts()
            .then(json => {
                if (json.hasOwnProperty('data')) {
                    if (json.message.toLowerCase() == 'retrieved all contacts') {
                        dispatch(contactsReturnSuccess(json.data));
                    } else {
                        dispatch(contactsReturnFailure(json.message));
                    }
                }
            }).catch(err => {
                dispatch(fetchFail());
                dispatch(contactsReturnFailure(err.message));
            });
    };
}