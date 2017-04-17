import React, {PropTypes} from 'react';
import {FoldingCube} from 'better-react-spinkit';
import '../../styles/gallery/gallery.scss';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css';
import ImageGallery from 'react-image-gallery';
import {encode} from 'base64-arraybuffer';
import DropZone from 'react-dropzone';

const GalleryPage = ({onDrop, cancelUpload, files, addToDeleteArray, image, imagesToDeleteArray, isLoading}) => {
    //let images = gallery.map(image => {
    //    return {
    //        original: `data:image/jpeg;base64,${image.ContentStr}`,
    //        thumbnail: `data:image/jpeg;base64,${image.ContentStr}`
    //    };
    //});


    //let s3Image = `data:image/jpeg;base64,${encode(image)}`;
    let images = [
        //{
        //  original: s3Image,
        //    thumbnail: s3Image
        //},
        {
            name:'image1',
            original: 'http://deskbg.com/s3/temp/96-Image00005.jpg',
            thumbnail: 'http://deskbg.com/s3/temp/96-Image00005.jpg'
        },
        {
            name:'image2',
            original: 'https://i.ytimg.com/vi/m8Lrby7g498/maxresdefault.jpg',
            thumbnail: 'https://i.ytimg.com/vi/m8Lrby7g498/maxresdefault.jpg'
        },
        {
            name:'image3',
            original: 'http://www.prgn.com/wp-content/uploads/2013/12/Denver-Skyline.jpg',
            thumbnail: 'http://www.prgn.com/wp-content/uploads/2013/12/Denver-Skyline.jpg'
        },
        {
            name:'image4',
            original: 'http://www.mycoolbackgrounds.com/backgrounds/24532/Summit%20Lake%20Below%20Mount%20Evans,%20Arapaho%20National%20Forest,%20Colorado.jpg',
            thumbnail: 'http://www.mycoolbackgrounds.com/backgrounds/24532/Summit%20Lake%20Below%20Mount%20Evans,%20Arapaho%20National%20Forest,%20Colorado.jpg'
        },
        {
            name:'image5',
            original: 'http://domplast.biz/wp-content/uploads/2016/12/garden_of_the_gods_open_hours_181984_1920_1080.jpg',
            thumbnail: 'http://domplast.biz/wp-content/uploads/2016/12/garden_of_the_gods_open_hours_181984_1920_1080.jpg'
        }
    ];

    return (
        <div className="gallery-main row">
            <div className="container-fluid">
                <div className="gallery-displayer">
                    <div className="gallery-jumbotron jumbotron">
                        <div className="gallery-container container">
                            <h2 className="display-4 gallery-title">Our Gallery</h2>
                            <hr className="gallery-horizontal-line-break"/>
                            {isLoading &&
                            <div className="gallery-loading">
                                <FoldingCube size={100}/>
                            </div>}

                            <div className="image-upload-area">
                                <DropZone className="drop-zone" onDrop={onDrop} multiple={false} accept="image/*">
                                    <div>Drag and drop an image here, or click to select</div>
                                </DropZone>
                                {files.length > 0 &&
                                <div className="preview-area">{files.map(file =>
                                    <img key={file.name} className="preview-image" src={file.preview}/>)}
                                    <div className="preview-action-area row">
                                        <div className="offset-md-2 col-md-4 col-xs-6">
                                            <button className="btn btn-lg submit-dark-button upload-image-button">
                                                Upload
                                            </button>
                                        </div>
                                        <div className="col-md-4 col-xs-6">
                                            <button className="btn btn-lg btn-warning cancel-image-upload"
                                                    onClick={cancelUpload}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="gallery-manager-area text-xs-center">
                                <button className="btn btn-warning" type="button" data-toggle="collapse"
                                        data-target="#galleryManager" aria-expanded="false"
                                        aria-controls="galleryManagerCollapse">
                                    Manage Images
                                </button>
                                <div className="collapse" id="galleryManager">
                                    <div className="card gallery-manager-card">
                                        <div className="card-block gallery-manager-card-block">
                                            <div className="row">
                                                <div className="col-xs-12 images-delete-section">
                                                    <button type="button" className="btn btn-info delete-images-button"
                                                            disabled={imagesToDeleteArray.length === 0}>
                                                        <i className="fa fa-trash fa-1x" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                                {images.map((image, i) => (
                                                    <div key={`image${i}`}
                                                         className="image-in-manager col-sm-6 col-md-4">
                                                        <img src={image.original} onClick={() => addToDeleteArray(image)}/>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gallery-displayer">
                                {images.length > 0
                                    ? <ImageGallery
                                    items={images}
                                    slideInterval={3000}
                                    thumbnailPosition="bottom"
                                    showFullScreenButton={true}
                                    autoPlay={true}
                                />
                                    : <p className="lead">No images were retrieved to view</p>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

GalleryPage.propTypes = {
    onDrop: PropTypes.func.isRequired,
    cancelUpload: PropTypes.func.isRequired,
    files: PropTypes.array.isRequired,
    imagesToDeleteArray: PropTypes.array.isRequired,
    image: PropTypes.object,
    addToDeleteArray: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
};


//<div className="container-fluid">
//    <div className="gallery-displayer">
//        <ImageGallery
//            items={images}
//            slideInterval={3000}
//        />
//    </div>
//</div>

export default GalleryPage;