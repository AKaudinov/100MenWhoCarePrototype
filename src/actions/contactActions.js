import * as actionTypes from './actionTypes';
import ContactApi from '../api/mockContactApi';

export function contactSubmitSuccess() {
    return {type: actionTypes.CONTACT_SUBMIT_SUCCESS};
}

export function contactSubmitFailure() {
    return {type: actionTypes.CONTACT_SUBMIT_FAILURE};
}

export function submitContactForm(contactForm) {
    return function (dispatch) {
        return ContactApi.SendContact(contactForm).then(() => {
            dispatch(contactSubmitSuccess());
        }).catch(error => {
            dispatch(contactSubmitFailure());
            throw(error);
        });
    };
}