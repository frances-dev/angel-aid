import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css'

const Doctors = (props) => {
    const { name, img, category, details } = props.service;
    return (
        <div className='my-grids-container'>
            <div class="my-card">
                <div className='card-img-container'>
                    <img src={img} class="card-img-top" alt="..." />
                    <p className="card-category">{category}</p>
                </div>
                <h2 className="card-title">{name}</h2>
                <div className="card-body">
                    <h6 className="card-text2">{details}</h6>
                </div>
                <div className="card-body2">
                    <Link to="/services" className='btn btn-danger my-btn'>Make an Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Doctors;