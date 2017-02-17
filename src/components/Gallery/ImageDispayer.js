import React, {PropTypes} from 'react';
import base64js from 'base64-js';

const ImageDisplayer = ({imgId, img}) => {
    let baseString = base64js.fromByteArray(img);
    let imageSource = `data:image/jpeg;charset=utf-8;base64,${baseString}`;
 return(
     <div id={`image${imgId}`} className="gallery-image">
         <img src={imageSource}/>
     </div>
 );
};


ImageDisplayer.propTypes = {
    imgId: PropTypes.number.isRequired,
  img: PropTypes.array.isRequired
};

export default ImageDisplayer;