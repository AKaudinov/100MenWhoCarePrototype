import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as galleryActions from '../../actions/galleryActions';
import GalleryPage from './GalleryPage';

class GalleryContainer extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            img: {},
            files: []
        };

        this.onDrop = this.onDrop.bind(this);
    }

    //commenting this out for now until we figure out what to do with S3 keys.
    //componentWillMount(){
    //    this.props.actions.loadGallery()
    //    .then(() => {
    //        return this.setState({img: this.props.gallery.data});
    //    });
    //}

    onDrop(files){
        this.setState({files: files});
    }

    render(){
        return (
            <GalleryPage onDrop={this.onDrop}
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