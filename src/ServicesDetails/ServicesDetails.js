import React from 'react';
import './ServicesDetails.css'

const ServicesDetails = (props) => {
    const { name, img, category, details, department, departmentImg } = props.service;
    return (
        <div className='grids-container'>
            <div class="card">
                <div className='card-img-container'>
                    <img src={img} class="card-img-top" alt="..." />
                    <p className="card-category">{category}</p>
                </div>
                <div>
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title text-success">{department}</h2>
                </div>
                <div className="card-body3">
                    <h6 className="card-text2">{details}</h6>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={departmentImg} class="card-img-top2" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;