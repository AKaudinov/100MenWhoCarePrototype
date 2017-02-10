import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as galleryActions from '../../actions/galleryActions';

class GalleryContainer extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            gallery: this.props.gallery.data
        };
    }

    componentWillMount(){
        this.props.actions.loadGallery();
    }

    render(){
        return (
            <div className="text-xs-center"><strong>Gallery will be here</strong></div>
        );
    }
}


GalleryContainer.propTypes = {
    gallery: PropTypes.object.isRequired
};

function mapStateToProps(state, ownprops){
    return{
      gallery: state.gallery
    };
}

function mapDispatchToProps(dispatch){
    return {
      actions: bindActionCreators(galleryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);

//ge.propTypes = {
//    actions: PropTypes.object.isRequired,
//    contactUsResult: PropTypes.object.isRequired,
//    fetchCallsInProgress: PropTypes.number.isRequired
//};
//
//ContactPage.contextTypes = {
//    router: PropTypes.object
//};
//
//function mapStateToProps(state, ownprops){
//    return{
//        contactUsResult: state.contactUsResult,
//        fetchCallsInProgress: state.fetchCallsInProgress
//    };
//}
//
//function mapDispatchToProps(dispatch){
//    return {
//        actions: bindActionCreators(contactActions, dispatch)
//    };
//}
//
//export default connect(mapStateToProps, mapDispatchTo