import * as actionTypes from './actionTypes';
import {beginFetch, fetchFail} from './fetchStatusActions';
import api from '../api/api';


export function loadGallerySuccess(galleryData){
    return {type: actionTypes.LOAD_GALLERY_SUCCESS, galleryData};
}

export function loadGalleryFailure(message){
    return {type: actionTypes.LOAD_GALLERY_FAILURE, message};
}

export function loadGallery(){
    return function(dispatch){
        dispatch(beginFetch);
       return api.GetGallery()
           .then(body =>{
               dispatch(loadGallerySuccess(body));
           }).catch(err => {
              dispatch(fetchFail);
               dispatch(loadGalleryFailure(err));
           });


        //.then(body => {
        //    dispatch(loadGallerySuccess(body.content));
        //}).catch(err =>{
        //       dispatch(fetchFail);
        //        dispatch(loadGalleryFailure(err));////
        //    });


        //.then(json => {
        //    if(json.status === 'success'){
        //        dispatch(loadGallerySuccess(json.data));
        //    }
        //}).catch(err => {
        //        dispatch(fetchFail);
        //        dispatch(loadGalleryFailure(err.hasOwnProperty('message') ? err.message : err));
        //    });
    };
}
