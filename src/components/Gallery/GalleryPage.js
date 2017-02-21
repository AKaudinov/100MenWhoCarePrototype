import React, {PropTypes} from 'react';
import ImageDisplayer from './ImageDispayer';
import {fromByteArray} from 'base64-js';

const GalleryPage = ({gallery}) => {
  let images = (
      gallery.map(image => {
          //let base64Image = fromByteArray(image.Content.data);
        return (<div key={image.Id} className="col-xs-12 col-sm-6 col-md-3">
            <ImageDisplayer imgId={image.Id} img={image.ContentStr}/>
        </div>);}));
    return(
      <div className="text-xs-center row">
          <h4>From the server</h4>
          {images}
      </div>
  );
};

GalleryPage.propTypes = {
    gallery: PropTypes.array.isRequired
};

export default GalleryPage;