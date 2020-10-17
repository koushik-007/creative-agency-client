import React from 'react';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPeopleCarry, faShoppingBasket, faComment} from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
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
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Service List</span>
                        </li>

                        <li onClick={handleAdmin} style={{cursor: "pointer"}}>
                                <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                        </li>

                        <li onClick={handleAdmin} style={{cursor: "pointer"}}>
                                <FontAwesomeIcon icon={faPeopleCarry} /> <span>Make Admin</span>
                        </li>
                </div>
                :
                <div>
                <li onClick={handleClient} style={{cursor: "pointer"}}>
                <FontAwesomeIcon icon={faShoppingBasket} /> <span>Order</span>
                </li>

                <li onClick={handleClient} style={{cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Service List</span>
                </li>

                <li onClick={handleClient} style={{cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                </li>
                 </div>
            }
            </ul>
           
        </div>
    );
};

export default Sidebar;