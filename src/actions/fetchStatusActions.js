import * as actionTypes from './actionTypes';

export function beginFetch() {
    return {type: actionTypes.BEGIN_FETCH};
}

export function fetchFail(){
    return{type: actionTypes.FETCH_FAIL};
}