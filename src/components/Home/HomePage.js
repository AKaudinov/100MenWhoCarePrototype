import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div id="carousel-home" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-home" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-home" data-slide-to="1"></li>
                        <li data-target="#carousel-home" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active">
                            <img src={require('../../assets/colorado.png')} alt="Colorado"/>
                            <div className="carousel-caption">
                                <h4>Test</h4>
                                <p>First Slide</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={require('../../assets/colorado.png')} alt="Colorado 2"/>
                            <div className="carousel-caption">
                                <h4>Second Slide</h4>
                                <p>The second slide</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={require('../../assets/colorado.png')} alt="Colorado 3"/>
                            <div className="carousel-caption">
                                <h4>And one more for good measure</h4>
                                <p>Third slide for good measure</p>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#carousel-home" role="button" data-slide="prev">
                            <span className="icon-prev" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-home" role="button" data-slide="next">
                            <span className="icon-next" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="jumbotron home-info">
                    <div className="container">
                        <div className="row">
                            <div className="jumbo-1 col-xs-12 col-md-4">
                                <h4>Home page example</h4>
                                <p>Something here to say</p>
                                <div className="offset-xs-2 offset-md-1 col-md-10 col-xs-8">
                                    <Link to="about" className="btn btn-warning" id="toAbout">Learn more</Link>
                                </div>
                            </div>
                            <div className="jumbo-2 offset-md-4 offset-md-3 col-md-4 col-xs-12">
                                <h4>Some other information</h4>
                                <p>Something more to say here</p>
                                <div className="offset-xs-2 offset-md-1 col-md-10 col-xs-8">
                                    <a className="btn btn-warning" href="#">Some Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-section card-group">
                    <div className="card">
                        <div className="yt-video1">
                            <iframe className="card-img-top" src="//www.youtube.com/embed/FG0fTKAqZ5g"
                                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        </div>
                        <div className="card-block">
                            <h5 className="card-title">Space vision</h5>
                            <p className="card-text">This is a time lapse of an earth as seen from ISS station</p>
                            <p className="card-text">
                                <small className="text-muted">Captured on ISS station</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="yt-video2">
                            <iframe className="card-img-top" src="//www.youtube.com/embed/kBwBsaA8VdI"
                                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        </div>
                        <div className="card-block">
                            <h5 className="card-title">Abrams tank</h5>
                            <p className="card-text">This is a video displaying Abrams m1a2 in action</p>
                            <p className="card-text">
                                <small className="text-muted">captured on m1a2</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="yt-video3">
                            <div className="yt-video3">
                                <iframe className="card-img-top" src="//www.youtube.com/embed/xh49qn2cQNU"
                                        frameborder="0" webkitallowfullscreen mozallowfullscreen
                                        allowfullscreen></iframe>
                            </div>
                            <div className="card-block">
                                <h5 className="card-title">F22 display</h5>
                                <p className="card-text">A display of F22 aircraft performance</p>
                                <p className="card-text">
                                    <small className="text-muted">captured during an air show</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//<div className="col-md-4 col-sm-4 col-xs-3 offset-lg-1 offset-md-1">

//<div className="container-fluid">
//    <div className="jumbotron">
//        <h1>This is The home page</h1>
//        <p>First Home page for testing</p>
//        <Link to="about" className="btn btn-info btn-lg" id="toAbout">About</Link>
//    </div>
//</div>

export default HomePage;