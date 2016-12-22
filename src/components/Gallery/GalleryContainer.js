import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class GalleryContainer extends React.Component{
    constructor(props, context){
        super(props,context);
    }
    render(){
        return (
            <div className="text-xs-center"><strong>Gallery will be here</strong></div>
        );
    }
}

export default GalleryContainer;