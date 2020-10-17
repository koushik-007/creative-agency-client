import React from 'react';
import frame from '../../../creative-agency/images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <main style={{margin: "12px 0px 0px 0px"}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-8 offset-md-1">
                <h1 style={{color: '#111430'}}>Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo delectus dolores asperiores inventore obcaecati!</p>
                <button className="btn btn-style">Hire us</button>
            </div>
            <div className="col-md-6 col-sm-8 col-12">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;