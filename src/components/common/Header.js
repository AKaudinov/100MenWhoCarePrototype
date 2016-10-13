import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/header.scss';

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
                    <i className="fa fa-bars"/>
                </button>

                <div className="collapse navbar-toggleable-sm pull-md-right" id="navContent">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <div/>
                            <IndexLink to="/" activeClassName="active" className="nav-link">
                                <i className="fa fa-home"/> Home</IndexLink>
                        </li>
                        <li className="nav-item">
                            <div/>
                            <Link to="/about" activeClassName="active" className="nav-link">
                                <i className="fa fa-info-circle"/> About</Link>
                        </li>
                        <li className="nav-item">
                            <div/>
                            <a className="nav-link" href="#">
                                <i className="fa fa-picture-o"/> Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <div/>
                            <Link to="/contact" activeClassName="active" className="nav-link">
                                <i className="fa fa-envelope"/> Contact</Link>
                        </li>
                        <li className="nav-item">
                            <div/>
                            <a href="#" className="nav-link">
                                <i className="fa fa-calendar"/> Events</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


export default Header;