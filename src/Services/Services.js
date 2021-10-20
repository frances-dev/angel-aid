import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, []);

    return (
        <div>
            <div className='my-margin'>
                <h2 className="my-4 p-heading fw-bold">Details About Our Services</h2>
                <div className="main-container">
                    <div className='grids'>
                        {
                            services.map(service =>
                                <ServicesDetails id={service.id} service={service} ></ServicesDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;