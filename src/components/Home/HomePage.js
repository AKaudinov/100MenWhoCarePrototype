import React from 'react';
import {Link} from 'react-router';
import '../../styles/home/homepage.scss';
import ReactPlayer from 'react-player';

class HomePage extends React.Component {
    render() {
        const introDivStyle = {
            backgroundImage: `url(${require('../../assets/together.jpg')})`,
            backgroundSize: 'cover',
            textAlign: 'center',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'
        };
        return (
            <div>

                <div id="home-page-main" className="home-page-main-intro" style={introDivStyle}>
                    <div className="home-page-intro-text-container">
                        <h1 className="home-page-main-text-hundred col-sm-12">100</h1>
                        <h3 className="home-page-main-subtext col-sm-12">Men who care</h3>
                        <hr width="50%" size="2px" color="white"/>
                        <h3 className="home-page-main-subtext-together col-sm-12">Together</h3>
                        <h3 className="home-page-main-subtext-difference col-sm-12">We will make a difference</h3>
                        <button className="learn-more-btn offset-sm-4 col-sm-2 btn btn-lg">Learn more</button>
                        <button className="contact-btn col-sm-2 btn btn-lg">Contact</button>
                    </div>
                </div>


                <div className="home-info-jumbo">
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="jumbo-1 col-xs-12">
                                    <p className="lincoln-quote text-xs-center">"I have an irrepressible desire to live
                                        so the world
                                        is a little better for my having lived in it."</p>
                                    <p className="lincoln text-xs-center">-Abraham Lincoln</p>
                                    <div className="offset-md-4 col-md-4 offset-sm-3 col-sm-6 offset-xs-2 col-xs-8">
                                        <Link to="about" className="btn btn-lg accept-yellow-button" id="toAbout">About us</Link>
                                    </div>
                                    <div className="mission-statement text-xs-center col-xs-12">
                                        <p className="mission-statement-main offset-md-3 col-md-6 col-xs-12 d-block">
                                            100+ Men committed to contributing $100 four times a year to local
                                            charities,
                                            which will positively impact our communities by allowing us to give $40,000
                                            + annually.
                                            100% of our donations will be spent locally by the chosen charity</p>

                                        <p className="mission-statement-footer col-xs-12 d-block">
                                            <strong>Together</strong><br/>We will make a difference!</p>
                                    </div>

                                    <div className="member-statement col-xs-12">
                                        <p className="member-statement-header text-xs-center d-block">Why should you become a member?</p>

                                        <div className="list-item text-xs-center col-md-3 col-sm-12">
                                            You don’t have time in your busy life
                                            to volunteer but want to help those in need and can commit to
                                            90 minutes each quarter
                                        </div>

                                        <div className="list-item text-xs-center col-md-3 col-sm-12">
                                            You are involved with other groups but
                                            also
                                            see the potential in this idea and are interested in adding it to your
                                            charitable efforts
                                        </div>

                                        <div className="list-item text-xs-center col-md-3 col-sm-12">
                                            You want 100% of your donations to go
                                            directly to a local charity
                                        </div>

                                        <div className="list-item text-xs-center col-md-3 col-sm-12">
                                            You want your $100 donation to
                                            become a part of a larger amount of money by joining together with other
                                            men,
                                            creating a powerful impact in our local area.
                                        </div>
                                    </div>
                                    <div className="contact-us-btn offset-md-4 col-md-4 offset-sm-3 col-sm-6 offset-xs-2 col-xs-8">
                                        <Link to="contact" className="btn btn-lg accept-yellow-button" id="toContactUs">Contact us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homepage-card-section card-group">
                    <div className="card">
                        <div className="yt-video">
                            <ReactPlayer url="https://www.youtube.com/watch?v=NM2wtte1JRE" controls={true}
                                         width="100%"/>
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
                            <ReactPlayer url="https://www.youtube.com/watch?v=89eaxsthTqc" controls={true}
                                         width="100%"/>
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
                            <ReactPlayer url="https://www.youtube.com/watch?v=I_PLLXgma9g" controls={true}
                                         width="100%"/>
                        </div>
                        <div className="card-block">
                            <h5 className="card-title">Denver Skyline</h5>
                            <p className="card-text">Denver Skyline by drone in 4k</p>
                            <p className="card-text">
                                <small className="text-muted">Denver Skyline</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HomePage;
//
//<div id="carousel-home" className="carousel slide" data-ride="carousel">
//    <ol className="carousel-indicators">
//        <li data-target="#carousel-home" data-slide-to="0" className="active"/>
//        <li data-target="#carousel-home" data-slide-to="1"/>
//        <li data-target="#carousel-home" data-slide-to="2"/>
//    </ol>
//    <div className="carousel-inner" role="listbox">
//
//        <div className="carousel-item active">
//            <img src={require('../../assets/colorado.png')} alt="Colorado"/>
//            <div className="carousel-caption">
//                <h4>Test</h4>
//                <p>First Slide</p>
//            </div>
//        </div>
//
//        <div className="carousel-item">
//            <img src={require('../../assets/coloradoMountains.png')} alt="Colorado 2"/>
//            <div className="carousel-caption">
//                <h4>Second Slide</h4>
//                <p>The second slide</p>
//            </div>
//        </div>
//
//        <div className="carousel-item">
//            <img src={require('../../assets/denver.png')} alt="Colorado 3"/>
//            <div className="carousel-caption">
//                <h4>And one more for good measure</h4>
//                <p>Third slide for good measure</p>
//            </div>
//        </div>
//
//        <a className="left carousel-control" href="#carousel-home" role="button" data-slide="prev">
//            <span className="icon-prev" aria-hidden="true"/>
//            <span className="sr-only">Previous</span>
//        </a>
//        <a className="right carousel-control" href="#carousel-home" role="button" data-slide="next">
//            <span className="icon-next" aria-hidden="true"/>
//            <span className="sr-only">Next</span>
//        </a>
//    </div>
//</div>