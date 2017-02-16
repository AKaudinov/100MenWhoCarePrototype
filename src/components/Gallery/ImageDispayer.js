import React, {PropTypes} from 'react';


const ImageDisplayer = ({imgId, img}) => {
 return(
     <div id={`image${imgId}`} className="gallery-image">
         <h5>img - {img}</h5>
     </div>
 );
};


ImageDisplayer.propTypes = {
    imgId: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};

export default ImageDisplayer;