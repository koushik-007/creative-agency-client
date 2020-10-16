import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { userContext, UserContext } from '../../../App';
import logo from '../../../creative-agency/images/logos/logo.png'

const Sidebar = ({handleClient, handleAdmin, isAdmin}) => {

    return (
        <div className="sidebar d-flex flex-column justify-content-between px-4 mt-3">

                <nav class="navbar navbar-light mb-5">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="150px" alt="" loading="lazy"/>
                </a>
                </nav>

            <ul className="list-unstyled px-3">
                
              {
                  isAdmin ?  
                   
               <div>
                        <li onClick={handleAdmin} style={{cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Service List</span>
                        </li>

                        <li onClick={handleAdmin} style={{cursor: "pointer"}}>
                                <FontAwesomeIcon icon={faHome} /> <span>Add Service</span>
                        </li>

                        <li onClick={handleAdmin} style={{cursor: "pointer"}}>
                                <FontAwesomeIcon icon={faHome} /> <span>Make Admin</span>
                        </li>
                </div>
                :
                <div>
                <li onClick={handleClient} style={{cursor: "pointer"}}>
                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order</span>
                </li>

                <li onClick={handleClient} style={{cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
                </li>

                <li onClick={handleClient} style={{cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faHome} /> <span>Review</span>
                </li>
                 </div>
            }
            </ul>
           
        </div>
    );
};

export default Sidebar;