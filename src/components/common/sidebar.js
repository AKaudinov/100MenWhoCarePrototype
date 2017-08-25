/**
 * Created by amirkaudinov on 8/22/17.
 */
import React,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const SideBar = ({sideBarOpen, onNavigatedAction}) => {
    let sideBarClass = sideBarOpen ? "sidebar open" : "sidebar";
  return (
   <div className={sideBarClass}>
       <ul className="sidebar-menu">
           <li className="side-menu-link-container">
               <IndexLink to="/" className="menu-link" activeClassName="active" onClick={onNavigatedAction}
               ><i className="fa fa-home"/> Home
               </IndexLink>
           </li>
           <li className="side-menu-link-container">
               <Link to="/about" className="menu-link" activeClassName="active" onClick={onNavigatedAction}>
                   <i className="fa fa-info-circle"/> About
               </Link>
           </li>
           <li className="side-menu-link-container">
               <Link to="/contact" className="menu-link" activeClassName="active" onClick={onNavigatedAction}
               ><i className="fa fa-envelope"/> Contact
               </Link>
           </li>
           <li className="side-menu-link-container">
               <Link to="/events" className="menu-link" activeClassName="active" onClick={onNavigatedAction}>
                   <i className="fa fa-calendar"/> Events
               </Link>
           </li>
       </ul>
   </div>
  );
};

SideBar.propTypes = {
    sideBarOpen: PropTypes.bool.isRequired,
    onNavigatedAction: PropTypes.func.isRequired
};

export default SideBar;