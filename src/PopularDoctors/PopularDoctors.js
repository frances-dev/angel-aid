import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';
import './PopularDoctors.css'

const PopularDoctors = () => {
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
                <h2 className="my-4 p-heading fw-bold">Meet our Doctors & Their Services</h2>
                <div className="main-container">
                    <div className='grids'>
                        {
                            services.map(service =>
                                <Doctors id={service.id} service={service} ></Doctors>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDoctors;