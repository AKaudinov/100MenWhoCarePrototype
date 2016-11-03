import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/header.scss';

class Header extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            navBarOpen: false
        };
        this.onNavToggle = this.onNavToggle.bind(this);
}

    onNavToggle(event) {
        return this.setState({navBarOpen: !this.state.navBarOpen});
    }


    render() {
        let navbarButtonClass = 'hidden-md-up float-xs-right navbar-toggler';
        if(!this.state.navBarOpen){
            navbarButtonClass += " "+'collapsed';
        }
        return (
            <div className="header">
                <nav className="navbar bg-inverse">
                    <a className="navbar-brand" href="http://www.100whocarealliance.org/">
                        <span><img className="logo" src={require('../../assets/100WhoCareColorado.png')}/></span>
                    </a>
                    <button className={navbarButtonClass} type="button" data-toggle="collapse"
                            data-target="#navContent"
                            aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.onNavToggle}>
                        <i className="fa fa-bars"/>
                    </button>

                    <div className="collapse navbar-toggleable-sm" id="navContent">
                        <ul className="headerMenu nav navbar-nav">
                            <li className="nav-item">
                                <div className="menu-home"/>
                                <IndexLink to="/" activeClassName="active" className="nav-link">
                                    <i className="fa fa-home"/> Home</IndexLink>
                            </li>
                            <li className="nav-item">
                                <div className="menu-about"/>
                                <Link to="/about" activeClassName="active" className="nav-link">
                                    <i className="fa fa-info-circle"/> About</Link>
                            </li>
                            <li className="nav-item">
                                <div className="menu-gallery"/>
                                <a className="nav-link" href="#">
                                    <i className="fa fa-picture-o"/> Gallery
                                </a>
                            </li>
                            <li className="nav-item">
                                <div className="menu-contact"/>
                                <Link to="/contact" activeClassName="active" className="nav-link">
                                    <i className="fa fa-envelope"/> Contact</Link>
                            </li>
                            <li className="nav-item">
                                <div className="menu-events"/>
                                <a href="#" className="nav-link">
                                    <i className="fa fa-calendar"/> Events</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Header;