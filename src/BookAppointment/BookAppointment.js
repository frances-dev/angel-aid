import React from 'react';
import './BookAppointment.css'

const BookAppointment = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>Book an Appointment Today</h1>
                </div>
                <div className="row">
                    <h2>We'd try to reach you within an hour. Please be patient!!</h2>
                </div>
                <div className="row input-container">
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input className='my' type="text" required />
                            <label>Name</label>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input className='my' type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input className='my' type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input className='my' type="text" required />
                            <label>Department you want to choose:</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input className='my' type="text" required />
                            <label>Doctor's ID (optional)</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input className='my' type="text" required />
                            <label>Select AppointMent Date:</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input className='my' type="text" required />
                            <label>Your Medical ID</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea required></textarea>
                            <label>Your Problems in Details</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="btn-lrg submit-btn btn-warning">Send Message</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;