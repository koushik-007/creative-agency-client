import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ServicesDetails from '../ServicesDetails/ServicesDetails';


const Services = () => {
    const history = useHistory()
    const handleRoute = () =>{
        history.push(`/DashBoard`)
    }

    const [serviceData, setSericeData] = useState([])
    useEffect(()=>{
        fetch('https://calm-wave-24035.herokuapp.com/homePageServiceList',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setSericeData(data));
    },[])

    return (
        <section className="services-container mt-5 pt-5 mb-5">
            <div className="text-center">
                <h3 style={{color: "#2D2D2D"}}>Provide awesome <span style={{color: "#7AB259"}}>services</span> </h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className="container row mt-5 pt-3">
                {
                    serviceData.map(service => <ServicesDetails service={service} handleRoute={handleRoute} key={service.name}></ServicesDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;