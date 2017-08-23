/**
 * Created by amirkaudinov on 8/22/17.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';
//import SideBar from './SideBar';
import '../../styles/common/header.scss';

class HeaderNew extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            navBarOpen: false
        };
        this.sideBarToggle = this.sideBarToggle.bind(this);
    }

    sideBarToggle(){
        this.setState({navBarOpen: !this.state.navBarOpen});
    }

    render() {
        return (
            <div className="header-new">
                <button className="sidebar-toggler" type="button" onClick={this.sideBarToggle}>
                    {this.state.navBarOpen
                        ? <i className="fa fa-chevron-circle-left"/>
                        : <i className="fa fa-chevron-circle-right"/>}
                </button>
                <SideBar sideBarOpen={this.state.navBarOpen}/>
            </div>
        );
    }
}

export default HeaderNew;