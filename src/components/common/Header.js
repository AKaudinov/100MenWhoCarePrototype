import React from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/common/header.scss';

class Header extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            navBarOpen: false
        };
        this.onNavClick = this.onNavClick.bind(this);
        this.onNavToggle = this.onNavToggle.bind(this);
}

    onNavClick() {
        return this.setState({navBarOpen: false});
    }

    onNavToggle(){
        return this.setState({navBarOpen: !this.state.navBarOpen});
    }


    render() {
        let navbarButtonClass = 'hidden-md-up float-xs-right navbar-toggler';
        if(!this.state.navBarOpen){
            navbarButtonClass += " "+'collapsed';
        }

        let navbarBodyClass = 'navbar-toggleable-sm';
        if(!this.state.navBarOpen){
            navbarBodyClass += " "+'collapse';
        }else{
            navbarBodyClass += " "+'collapse in';
        }
        //<i className="fa fa-bars"/>



        return (
            <div className="header">
                <nav className="navbar bg-inverse">
                    <a className="navbar-brand" href="http://www.100whocarealliance.org/">
                        <span><img className="logo" src={require('../../assets/100M_logo.png')}/></span>
                    </a>
                    <button className="navbar-toggler hidden-md-up float-xs-right" type="button" data-toggle="collapse"
                            data-target="#navContent" aria-controls="navContent" aria-expanded="false"
                            aria-label="Toggle navigation" onClick={this.onNavToggle}>
                        {this.state.navBarOpen
                            ? <i className="fa fa-chevron-circle-down"/>
                            : <i className="fa fa-chevron-circle-up"/>}
                    </button>

                    <div className="collapse navbar-toggleable-sm" id="navContent">
                        <a class="navbar-brand" href="#">remove later - fix</a>
                        <ul className="headerMenu nav navbar-nav">
                            <li className="nav-item">
                                <div className="menu-home"/>
                                <IndexLink to="/" activeClassName="active" className="nav-link" onClick={this.onNavClick}>
                                    <i className="fa fa-home"/> Home</IndexLink>
                            </li>
                            <li className="nav-item">
                                <div className="menu-about"/>
                                <Link to="/about" activeClassName="active" className="nav-link" onClick={this.onNavClick}>
                                    <i className="fa fa-info-circle"/> About</Link>
                            </li>
                            <li className="nav-item">
                                <div className="menu-gallery"/>
                                <Link to="/gallery" activeClassName="active" className="nav-link" onClick={this.onNavClick}>
                                    <i className="fa fa-picture-o"/> Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="menu-contact"/>
                                <Link to="/contact" activeClassName="active" className="nav-link" onClick={this.onNavClick}>
                                    <i className="fa fa-envelope"/> Contact</Link>
                            </li>
                            <li className="nav-item">
                                <div className="menu-events"/>
                                <a href="#" className="nav-link" onClick={this.onNavClick}>
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