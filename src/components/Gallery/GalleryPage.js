import React, {PropTypes} from 'react';
import ImageDisplayer from './ImageDispayer';
import {FoldingCube} from 'better-react-spinkit';
import '../../styles/gallery/gallery.scss';

const GalleryPage = ({gallery, isLoading}) => {
  let images = (
      gallery.map(image => {
        return (<div key={image.Id} className="col-xs-12 col-sm-6 col-md-3">
            <ImageDisplayer imgId={image.Id} img={image.ContentStr}/>
        </div>);}));
    return(
      <div className="text-xs-center row">
          <h4>From the server</h4>
          {isLoading &&
            <div className="gallery-loading">
                <FoldingCube color="black" size={100}/>
            </div>
          }
          {images}
      </div>
  );
};

GalleryPage.propTypes = {
    gallery: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default GalleryPage;