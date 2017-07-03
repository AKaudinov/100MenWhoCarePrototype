import * as actionTypes from './actionTypes';
import {beginFetch, fetchFail} from './fetchStatusActions';
import api from '../api/mockEventApi';


export function eventSubmitSuccess(message){
    return {type: actionTypes.EVENT_SUBMIT_SUCCESS, message};
}

export function eventSubmitFailure(err){
    return {type: actionTypes.EVENT_SUBMIT_FAILURE, err};
}

export function eventsReturnSuccess(events){
    return {type: actionTypes.EVENT_RETURN_SUCCESS, payload: events};
}

export function eventsReturnFailure(err){
    return {type: actionTypes.EVENT_RETURN_FAILURE, err};
}

export function submitEvent(eventForm){
    return dispatch => {
        //submit an event
        dispatch(beginFetch);
        return api.CreateEvent(eventForm)
        .then(message => {
            dispatch(eventSubmitSuccess(message.status));})
        .catch(err => {
            dispatch(fetchFail());
            if(err.hasOwnProperty('message')){
                dispatch(eventSubmitFailure(err.message));
            }else{
                dispatch(eventSubmitFailure(err));
            }
        })
    };
}

export function getEvents(){
    return dispatch => {
        //get all events from the api
    };
}