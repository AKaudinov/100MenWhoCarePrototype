import React, {PropTypes} from 'react';
import ImageDisplayer from './ImageDispayer';
import {FoldingCube} from 'better-react-spinkit';
import '../../styles/gallery/gallery.scss';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const GalleryPage = ({gallery, isLoading}) => {
    let images = (
        gallery.map(image => {
            return (<div key={image.Id} className="col-xs-12 col-sm-6 col-md-3">
                <ImageDisplayer imgId={image.Id} img={image.ContentStr}/>
            </div>);
        }));
    let imgs = gallery.map(image => {
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
                        items={imgs}
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