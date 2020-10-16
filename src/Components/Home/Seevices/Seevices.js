import React from 'react';
import { useHistory } from 'react-router-dom';
import services1 from '../../../creative-agency/images/icons/service1.png';
import services2 from '../../../creative-agency/images/icons/service2.png';
import services3 from '../../../creative-agency/images/icons/service3.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData = [
    {
        id: 1,
        name: 'Web & Mobile design',
        img: services1,
        details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        id: 2,
        name: 'Graphic design',
        img: services2,
        details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        id:3,
        name: 'Web development',
        img: services3,
        details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
]

const Services = () => {
    const history = useHistory()
    const handleRoute = () =>{
        history.push(`/DashBoard`)
    }
    return (
        <section className="services-container mt-5 pt-5 mb-5">
            <div className="text-center">
                <h3 style={{color: "#2D2D2D"}}>Provide awesome <span style={{color: "#7AB259"}}>services</span> </h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-3">
                {
                    serviceData.map(service => <ServicesDetails service={service} handleRoute={handleRoute} key={service.name}></ServicesDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;