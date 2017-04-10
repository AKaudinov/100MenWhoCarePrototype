import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as galleryActions from '../../actions/galleryActions';
import GalleryPage from './GalleryPage';
import ImageGallery from 'react-image-gallery';

class GalleryContainer extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            img: {},
            files: []
        };

        this.onDrop = this.onDrop.bind(this);
        this.cancelUpload = this.cancelUpload.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.renderCustomDeleteButton = this.renderCustomDeleteButton.bind(this);
    }

    //commenting this out for now until we figure out what to do with S3 keys.
    //componentWillMount(){
    //    this.props.actions.loadGallery()
    //    .then(() => {
    //        return this.setState({img: this.props.gallery.data});
    //    });
    //}

    onDrop(files){
        return this.setState({files: files});
    }

    cancelUpload(){
        return this.setState({files: []});
    }

    deleteImage(img){
        /*eslint-disable no-console*/
        //console.log(img.target.parentElement.parentElement.parentElement);
    }

    renderCustomDeleteButton(){
        return (
            <div className="image-gallery-delete-section">
                <button type="button" className="image-gallery-delete-button">
                <i className="fa fa-xing fa-3x" aria-hidden="true" onClick={this.deleteImage}/></button>
            </div>
        );
    }

    render(){
        return (
            <GalleryPage onDrop={this.onDrop}
                         cancelUpload={this.cancelUpload}
                         renderDeleteBtn={this.renderCustomDeleteButton}
                         files={this.state.files}
                         image={this.state.img}
                         isLoading={this.props.fetchCallsInProgress > 0}/>
        );
    }
}


GalleryContainer.propTypes = {
    gallery: PropTypes.object.isRequired,
    fetchCallsInProgress: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownprops){
    return{
      gallery: state.gallery,
        fetchCallsInProgress: state.fetchCallsInProgress
    };
}

function mapDispatchToProps(dispatch){
    return {
      actions: bindActionCreators(galleryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);