import React from 'react';
import slack from '../../../creative-agency/images/logos/slack.png';
import google from '../../../creative-agency/images/logos/google.png';
import uber from '../../../creative-agency/images/logos/uber.png';
import netflix from '../../../creative-agency/images/logos/netflix.png';
import airbnb from '../../../creative-agency/images/logos/airbnb.png'

import './Clients.css'
const Clients = () => {
    return (
        <div className="" style={{marginTop: "4rem"}}>
            <div className="row  d-flex  align-items-center justify-content-center" style={{marginRight: "0px",marginLeft: "0px"}}>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={slack} className="clientsIcon1"  alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={google} className="clientsIcon2" alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={uber} className="clientsIcon3" alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={netflix} className="clientsIcon4" alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={airbnb} className="clientsIcon5" alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default Clients;