import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


export default function galleryReducer(state = initialState.gallery, action){
    switch(action.type){
        case actionTypes.LOAD_GALLERY_SUCCESS:
                return Object.assign({}, state, {
                    data: action.galleryData,
                    message: ''
                });
        case actionTypes.LOAD_GALLERY_FAILURE:
            return Object.assign({}, state, {
               message: action.message
            });
        default:
            return state;
    }
}