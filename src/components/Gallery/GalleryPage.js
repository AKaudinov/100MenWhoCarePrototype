import React, {PropTypes} from 'react';
import ImageDisplayer from './ImageDispayer';
import {fromByteArray} from 'base64-js';
import base64 from 'base-64';

const GalleryPage = ({gallery}) => {
  let images = (
      gallery.map(image => {
          //let base64Image = fromByteArray(image.Content.data);
          let base64Image = base64.encode(image.Content.data);
        return (<div key={image.Id} className="col-xs-12 col-sm-6 col-md-3">
            <ImageDisplayer imgId={image.Id} img={base64Image}/>
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