import React, {PropTypes} from 'react';
import {FoldingCube} from 'better-react-spinkit';
import '../../styles/gallery/gallery.scss';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css';
import ImageGallery from 'react-image-gallery';
import {encode} from 'base64-arraybuffer';

const GalleryPage = ({image, isLoading}) => {
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
         original: 'http://deskbg.com/s3/temp/96-Image00005.jpg',
            thumbnail: 'http://deskbg.com/s3/temp/96-Image00005.jpg'
        },
        {
            original: 'https://i.ytimg.com/vi/m8Lrby7g498/maxresdefault.jpg',
            thumbnail: 'https://i.ytimg.com/vi/m8Lrby7g498/maxresdefault.jpg'
        },
        {
            original: 'http://www.prgn.com/wp-content/uploads/2013/12/Denver-Skyline.jpg',
            thumbnail: 'http://www.prgn.com/wp-content/uploads/2013/12/Denver-Skyline.jpg'
        },
        {
            original: 'http://www.mycoolbackgrounds.com/backgrounds/24532/Summit%20Lake%20Below%20Mount%20Evans,%20Arapaho%20National%20Forest,%20Colorado.jpg',
            thumbnail: 'http://www.mycoolbackgrounds.com/backgrounds/24532/Summit%20Lake%20Below%20Mount%20Evans,%20Arapaho%20National%20Forest,%20Colorado.jpg'
        },
        {
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
                            <hr className="gallery-horizontal-line-break" />
                            {isLoading &&
                            <div className="gallery-loading">
                                <FoldingCube size={100}/>
                            </div>}

                                <div className="gallery-displayer">
                                    {images.length > 0
                                    ? <ImageGallery
                                        items={images}
                                        slideInterval={3000}
                                        thumbnailPosition="bottom"
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
    image: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
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