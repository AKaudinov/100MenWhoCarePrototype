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
            backgroundPosition:'center center',
            backgroundAttachment: 'fixed'
        };
        return (
            <div>

                <div id="home-page-main" className="home-page-main-intro" style={introDivStyle}>
                    <div className="row">
                    <div className="col-xs-12 home-page-intro-text-container">
                        <h1 className="home-page-main-text-hundred col-sm-12">100</h1>
                        <h3 className="home-page-main-subtext col-sm-12">Men who care</h3>
                        <h3 className="home-page-main-subtext-together col-sm-12">Together</h3>
                        <h3 className="home-page-main-subtext-difference col-sm-12">We will make a difference</h3>
                    </div>
                    <div className="col-xs-12">
                        <div className="offset-sm-3 col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <Link to="about" className="ghost-white-button about-btn btn btn-lg">About</Link>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <Link to="contact" className="ghost-white-button contact-btn btn btn-lg">Contact</Link>
                        </div>
                    </div>
                    </div>
                </div>


                <div className="home-info-jumbo">
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="jumbo-1 col-xs-12">
                                    <div className="member-statement col-xs-12">
                                        <h1 className="member-statement-header text-xs-center d-block">Why become a member?</h1>

                                        <div className="list-item text-xs-center col-md-6 col-lg-3 col-sm-12">
                                            You don’t have time in your busy life
                                            to volunteer but want to help those in need and can commit to
                                            90 minutes each quarter
                                        </div>

                                        <div className="list-item text-xs-center col-md-6 col-lg-3 col-sm-12">
                                            You are involved with other groups but
                                            also see the potential in this idea and are interested
                                            in adding it to your charitable efforts
                                        </div>

                                        <div className="list-item text-xs-center col-md-6 col-lg-3 col-sm-12">
                                            You want 100% of your donations to go
                                            directly to a local charity
                                        </div>

                                        <div className="list-item text-xs-center col-md-6 col-lg-3 col-sm-12">
                                            You want your $100 donation to
                                            become a part of a larger amount of money by joining together with other
                                            men,
                                            creating a powerful impact in our local area.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="homepage-card-section card-group col-xs-12">
                    <div className="card">
                        <div className="video">
                            <ReactPlayer url="https://www.youtube.com/watch?v=NM2wtte1JRE"
                                         controls={true}
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
                        <div className="video">
                            <ReactPlayer url="https://www.youtube.com/watch?v=89eaxsthTqc"
                                         controls={true}
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
                        <div className="video">
                            <ReactPlayer url="https://www.youtube.com/watch?v=I_PLLXgma9g"
                                         controls={true}
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
            </div>
        );
    }
}


export default HomePage;
