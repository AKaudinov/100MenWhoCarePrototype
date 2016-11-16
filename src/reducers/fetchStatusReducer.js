import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionEndsInSuccess(actionType){
    return actionType.substring(actionType.length - 8) == '_SUCCESS';
}

export default function fetchStatusReducer(state = initialState.fetchCallsInProgress, action){
    if(action.type == actionTypes.BEGIN_FETCH){
        return state + 1;
    }
    if(actionEndsInSuccess(action.type) || action.type == actionTypes.FETCH_FAIL){
        return state == 0 ? state : state - 1;
    }
    return state;
}