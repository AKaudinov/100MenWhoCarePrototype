import * as actionTypes from './actionTypes';
import ContactApi from '../api/mockContactApi';

export function contactSubmitSuccess() {
    return {type: actionTypes.CONTACT_SUBMIT_SUCCESS};
}

export function contactSubmitFailure(contactSubmissionError) {
    return {type: actionTypes.CONTACT_SUBMIT_FAILURE, contactSubmissionError};
}

export function submitContactForm(contactForm) {
    return function (dispatch) {
        return ContactApi.SendContact(contactForm).then(() => {
            //dispatch(contactSubmitSuccess());
            return null;
        }).catch(error => {
            dispatch(contactSubmitFailure(error));
            //throw(error);
        });
    };
}