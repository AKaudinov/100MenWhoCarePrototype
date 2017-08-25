/**
 * Created by amirkaudinov on 8/22/17.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';
import SideBar from './SideBar';
import '../../styles/common/header.scss';

class HeaderNew extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            navBarOpen: false
        };
        this.sideBarToggle = this.sideBarToggle.bind(this);
        this.onNavigatedAction = this.onNavigatedAction.bind(this);
    }

    sideBarToggle(){
        this.setState({navBarOpen: !this.state.navBarOpen});
    }

    onNavigatedAction(){
        this.setState({navBarOpen: false});
    }

    render() {
        return (
            <div className="header-new">
                <div className="header-main-menu">
                    <ul className="main-menu">
                        <li className="main-menu-link-container">
                            <IndexLink to="/" className="menu-link" activeClassName="active">
                                <i className="fa fa-home"/> Home
                            </IndexLink>
                        </li>
                        <li className="main-menu-link-container">
                            <Link to="/about" className="menu-link" activeClassName="active">
                                <i className="fa fa-info-circle"/> About
                            </Link>
                        </li>
                        <li className="main-menu-link-container">
                            <Link to="/contact" className="menu-link" activeClassName="active">
                                <i className="fa fa-envelope"/> Contact
                            </Link>
                        </li>
                        <li className="main-menu-link-container">
                            <Link to="/events" className="menu-link" activeClassName="active">
                                <i className="fa fa-calendar"/> Events
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler" type="button" onClick={this.sideBarToggle}>
                    {this.state.navBarOpen
                        ? <i className="fa fa-2x fa-chevron-circle-left"/>
                        : <i className="fa fa-2x fa-chevron-circle-right"/>}
                </button>
                <SideBar sideBarOpen={this.state.navBarOpen} onNavigatedAction={this.onNavigatedAction}/>
            </div>
        );
    }
}

export default HeaderNew;