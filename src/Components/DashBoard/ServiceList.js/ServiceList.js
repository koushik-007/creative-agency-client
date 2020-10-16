import React, { useEffect, useState } from 'react';
import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';


const ServiceList = ({loggedInUser}) => {
    const [clientData, setClientData] = useState([])
    useEffect(()=>{
        fetch('https://calm-wave-24035.herokuapp.com/serviceList?email='+loggedInUser.email,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setClientData(data));
    },[])

    return (
        <div className="mt-4">
        <div className="row" style={{margin: "0 0"}}>
            <div className="col-md-12 d-flex justify-content-between mb-3">
                <h4>Service List</h4>
                <h4>{loggedInUser.name}</h4>
            </div>
            <div className="col-md-12"  style={{backgroundColor: "rgb(215, 240, 243)"}}>
                <div className="row px-3">
                   {
                       clientData.map(data =>  <ServiceListDetails data={data}></ServiceListDetails>)
                   }
            </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceList;