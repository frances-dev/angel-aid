import React from 'react';
import './Doctors.css'

const Doctors = (props) => {
    const { name, img, category, details } = props.service;
    return (
        <div className='grids-container'>
            <div class="card">
                <div className='card-img-container'>
                    <img src={img} class="card-img-top" alt="..." />
                    <p className="card-category">{category}</p>
                </div>
                <h2 className="card-title">{name}</h2>
                <div className="card-body">
                    <h6 className="card-text2">{details}</h6>
                </div>
                <div className="card-body2">
                    <button className='btn btn-danger'>Make an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Doctors;