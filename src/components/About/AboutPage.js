import React from 'react';
import {IndexLink} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/about/about.scss';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-us-page">
                <div className="jumbotron about-us-section">
                    <div className="container">
                        <h4 className="about-us-header display-4">About us</h4>
                        <hr className="about-us-horizontal-break"/>
                        <div className="row">
                        <div className="about-us-text col-xs-12 col-lg-6">
                            <p>We are not a charity.  We facilitate giving to local charities.

                                Checks are made directly to the charity.  We hold quarterly events

                                where we eat, drink, nominate, listen, vote, and donate.   The 100

                                people Who Care concept was actually started as a  ‘100 Women

                                Women Who Care ‘group in Jackson, MI by Mayor Karen Dunigan.  It

                                has spread throughout the Midwest and the rest of the country.</p>
                            <ul className="about-us-list text-xs-left">
                                <li className="about-us-list-item">Members are encouraged to
                                    nominate on paper when they

                                    come in to the event a local 501(c)3 charity.  We stress the

                                    money must be used locally, not sent off outside of the

                                    Denver area.  We express this with the nominators and the

                                    charity that is selected.</li>

                                <li className="about-us-list-item">Members mingle, drink, eat for an hour or less.
                                    We may have a guest speaker each event.</li>

                                <li className="about-us-list-item">We draw 3 nominations,
                                    then have the nominator give a short

                                    speech on why their charity is deserving.</li>

                                <li className="about-us-list-item">Ballots are passed out,
                                    members rank/vote their top three.</li>

                                <li className="about-us-list-item">Ballots are counted, winner announced,
                                    members write a check on the spot to the charity to be collected by the Board.</li>

                                <li className="about-us-list-item">Those that cannot make it,
                                    send or drop off their checks within a week to specified board members.
                                    Checks are given to the charity asap. Once totaled, we have a publicity photo

                                    with one large symbolic check given to the charity by the

                                    board and any members who want to show up.</li>
                            </ul>
                        </div>
                            <div className="col-xs-12 col-lg-6 about-img-container">
                                <ReactCSSTransitionGroup
                                transitionName="about-us-img-transition"
                                transitionAppear={true}
                                transitionAppearTimeout={1000}
                                transitionEnter={false}
                                transitionLeave={false}>
                                <img key="about-us-image" className="who-care-image-about"
                                     src={require('../../assets/100WhoCareColorado.png')}/>
                                </ReactCSSTransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;