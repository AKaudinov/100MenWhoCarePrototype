import React from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/common/header.scss';

class Header extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            navBarOpen: false
        };
        this.onNavToggle = this.onNavToggle.bind(this);
}

    onNavToggle(){
        return this.setState({navBarOpen: !this.state.navBarOpen});
    }

    /* <a className="navbar-brand" href="http://www.100whocarealliance.org/">
     <img className="logo" src={require('../../assets/100M_logo.png')}/>
     </a>*/
    render() {

        return (
            <div className="header">
                <nav className="navbar bg-warning">
                    <button className="navbar-toggler hidden-md-up float-xs-right" type="button" data-toggle="collapse"
                            data-target="#navContent" aria-controls="navContent" aria-expanded="false"
                            aria-label="Toggle navigation" onClick={this.onNavToggle}>
                        {this.state.navBarOpen
                            ? <i className="fa fa-chevron-circle-up"/>
                            : <i className="fa fa-chevron-circle-down"/>}
                    </button>


                    <div className="collapse navbar-toggleable-sm" id="navContent">
                        <ul className="headerMenu nav navbar-nav">
                            <li className="nav-item">
                                <div className="menu-home"/>
                                <IndexLink to="/" activeClassName="active" className="nav-link">
                                    <i className="fa fa-home"/> Home
                                </IndexLink>
                            </li>
                            <li className="nav-item">
                                <div className="menu-about"/>
                                <Link to="/about" activeClassName="active" className="nav-link">
                                    <i className="fa fa-info-circle"/> About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="menu-contact"/>
                                <Link to="/contact" activeClassName="active" className="nav-link">
                                    <i className="fa fa-envelope"/> Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="menu-events"/>
                                <Link to="/events" activeClassName="active" className="nav-link">
                                    <i className="fa fa-calendar"/> Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

//cutting gallery out; downscoping.
//<li className="nav-item">
//    <div className="menu-gallery"/>
//    <Link to="/gallery" activeClassName="active" className="nav-link">
//        <i className="fa fa-picture-o"/> Gallery
//    </Link>
//</li>

export default Header;