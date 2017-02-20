import React, {PropTypes} from 'react';
//import {fromByteArray} from 'base64-js';

const ImageDisplayer = ({imgId, img}) => {
    //let baseString = fromByteArray(img);
    let imageSource = `data:image/jpeg;base64,${img}`;
 return(
     <div id={`image${imgId}`} className="gallery-image">
         <img src={imageSource}/>
     </div>
 );
};


ImageDisplayer.propTypes = {
    imgId: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};

export default ImageDisplayer;