/**
 * Created by amirkaudinov on 8/22/17.
 */
import React,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const SideBar = ({sideBarOpen}) => {
    let sideBarClass = sideBarOpen ? "sidebar open" : "sidebar";
  return (
   <div className={sideBarClass}>
       <ul className="sidebar-menu">
           <li>option 1</li>
           <li>option 2</li>
           <li>option 3</li>
           <li>option 4</li>
       </ul>
   </div>
  );
};

SideBar.propTypes ={
  sideBarOpen: PropTypes.bool.isRequired
};

export default SideBar;