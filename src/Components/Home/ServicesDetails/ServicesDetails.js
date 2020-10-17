import React from 'react';

const ServicesDetails = ({ service, handleRoute}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center mb-3" style={{cursor: "pointer"}} onClick={()=>handleRoute()}>
            <img style={{height: '50px'}} src={`data:image/png;base64,${service.img}`}alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="">{service.details}</p>
        </div>
    );
};

export default ServicesDetails;