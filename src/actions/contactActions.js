import * as actionTypes from './actionTypes';
import {beginFetch, fetchFail} from './fetchStatusActions';
import ContactApi from '../api/mockContactApi';

export function contactSubmitSuccess(message) {
    return {type: actionTypes.CONTACT_SUBMIT_SUCCESS, message};
}

export function contactSubmitFailure(err) {
    return {type: actionTypes.CONTACT_SUBMIT_FAILURE, err};
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