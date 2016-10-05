import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar bg-inverse">
                <a className="navbar-brand" href="http://www.100whocarealliance.org/">
                    <span><img className="logo" src={require('../../assets/100WhoCareColorado.png')}/></span>
                </a>
                <button className="navbar-toggler hidden-md-up pull-xs-right" type="button" data-toggle="collapse"
                        data-target="#navContent"
                        aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>

                <div className="collapse navbar-toggleable-sm pull-md-right" id="navContent">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <IndexLink to="/" activeClassName="active" className="btn">
                                <i className="fa fa-home"></i> Home</IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" activeClassName="active" className="btn">
                                <i className="fa fa-info-circle"></i> About</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn">
                                <i className="fa fa-envelope"></i> Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn">
                                <i className="fa fa-calendar"></i> Events</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


export default Header;