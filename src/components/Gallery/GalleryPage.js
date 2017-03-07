import React, {PropTypes} from 'react';
import {FoldingCube} from 'better-react-spinkit';
import '../../styles/gallery/gallery.scss';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css';
import ImageGallery from 'react-image-gallery';

const GalleryPage = ({gallery, isLoading}) => {
    let images = gallery.map(image => {
        return {
            original: `data:image/jpeg;base64,${image.ContentStr}`,
            thumbnail: `data:image/jpeg;base64,${image.ContentStr}`
        };
    });
    return (
        <div className="text-xs-center row">
            {isLoading &&
            <div className="gallery-loading">
                <FoldingCube color="black" size={100}/>
            </div>
            }
            <div className="container-fluid">
                <div className="gallery-displayer">
                    <ImageGallery
                        items={images}
                        slideInterval={3000}
                    />
                </div>
            </div>
        </div>
    );
};

GalleryPage.propTypes = {
    gallery: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default GalleryPage;