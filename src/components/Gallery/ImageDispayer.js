import React, {PropTypes} from 'react';

const ImageDisplayer = ({imgId, img}) => {
    let imageSource = `data:image/jpeg;base64,${img}`;
 return(
     <div id={`image${imgId}`} className="gallery-image">
         <img src={imageSource}/>
     </div>
 );
};


ImageDisplayer.propTypes = {
    imgId: PropTypes.number.isRequired,
  img: PropTypes.string
};

export default ImageDisplayer;