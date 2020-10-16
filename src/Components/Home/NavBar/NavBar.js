import React from 'react';
import logo from '../../../creative-agency/images/logos/logo.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container mt-2">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="150"  alt="" loading="lazy"/>
                </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto" style={{color: '#474747'}}>

                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  mr-5" href="#">Our Portfolio</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  mr-5" href="#">Our Team</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  mr-5" href="#">Contact Us</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  mr-5 btn-style" href="/dashBoard">Login</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;