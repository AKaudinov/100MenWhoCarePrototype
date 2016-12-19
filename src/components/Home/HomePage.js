import React from 'react';
import {Link} from 'react-router';
import '../../styles/home/homepage.scss';
import ReactPlayer from 'react-player';

class HomePage extends React.Component {
    render() {
        return (
            <div>

                <div id="carousel-home" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-home" data-slide-to="0" className="active"/>
                        <li data-target="#carousel-home" data-slide-to="1"/>
                        <li data-target="#carousel-home" data-slide-to="2"/>
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
                            <img src={require('../../assets/coloradoMountains.png')} alt="Colorado 2"/>
                            <div className="carousel-caption">
                                <h4>Second Slide</h4>
                                <p>The second slide</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={require('../../assets/denver.png')} alt="Colorado 3"/>
                            <div className="carousel-caption">
                                <h4>And one more for good measure</h4>
                                <p>Third slide for good measure</p>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#carousel-home" role="button" data-slide="prev">
                            <span className="icon-prev" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-home" role="button" data-slide="next">
                            <span className="icon-next" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="home-info-jumbo">
                    <div className="jumbotron">
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
                </div>

                <div className="homepage-card-section card-group">
                    <div className="card">
                        <div className="yt-video">
                            <ReactPlayer url="https://www.youtube.com/watch?v=NM2wtte1JRE" controls={true} width="100%"/>
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
                        <div className="yt-video">
                            <ReactPlayer url="https://www.youtube.com/watch?v=89eaxsthTqc" controls={true} width="100%"/>
                        </div>
                        <div className="card-block">
                            <h5 className="card-title">Universe Theme</h5>
                            <p className="card-text">How The Universe works</p>
                            <p className="card-text">
                                <small className="text-muted">By Richard Blair</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                            <div className="yt-video">
                                <ReactPlayer url="https://www.youtube.com/watch?v=3gIdMEAvQk0" controls={true} width="100%"/>
                            </div>
                            <div className="card-block">
                                <h5 className="card-title">Quantum Physics</h5>
                                <p className="card-text">Quantum Physics and Microscopic Universe</p>
                                <p className="card-text">
                                    <small className="text-muted">Space Documentary</small>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HomePage;