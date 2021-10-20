import React from 'react';
import './About.css'
import './../Departments/Departments.css'

const About = () => {
    return (
        <div>
            <h2 className='mt-3 about-text'>Learn More about Us.</h2>
            <section className="medical-services">
                <h2 className="main-heading1 lite mt-3 text-danger">Our Famous</h2>
                <h2 className="main-heading2 text-success mt-0">Medical Departments</h2>

                {/* Medical Services List Starts */}
                <ul className="list-unstyled row text-center">
                    <li className="col-md-2 col-sm-4 col-xs-12">
                        <div className="icon">
                            <img src="https://images.news18.com/ibnlive/uploads/2020/09/1599891468_rtx670ya.jpg?impolicy=website&width=510&height=356" alt="Band Aid" />
                        </div>
                        <h5>First Aid</h5>
                        <p>You will get the fastest aid from us near your door.</p>
                    </li>
                    <li className="col-md-2 col-sm-4 col-xs-12">
                        <div className="icon">
                            <img src="https://www.pasadenahealthcenter.com/site/wp-content/uploads/2018/02/Dentist-Check-Up.jpg" alt="Dental Care" />
                        </div>
                        <h5>Dental Care</h5>
                        <p>our dentals service is really on the top level.</p>
                    </li>
                    <li className="col-md-2 col-sm-4 col-xs-12">
                        <div className="icon">
                            <img src="https://lifecarecardiacambulance.co.in/assets/Images/Services_Images/Services2.png" alt="24x7 Ambulance" />
                        </div>
                        <h5>24x7 Ambulance</h5>
                        <p>We deliver 24 hours ambulance service in the whole city area.</p>
                    </li>
                    <li className="col-md-2 col-sm-4 col-xs-12">
                        <div className="icon">
                            <img src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/9-2018-phyiscian-specialty-data-report-image.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=baZjH61u" alt="Qualified Doctors" />
                        </div>
                        <h5>Qualified Doctors</h5>
                        <p>We have the most numbers of qualified doctors.</p>
                    </li>
                    <li className="col-md-2 col-sm-4 col-xs-12">
                        <div className="icon">
                            <img src="https://4.imimg.com/data4/HS/CY/MY-24119759/pharmacy-management-500x500.jpg" alt="Medical Pharmacy" />
                        </div>
                        <h5>Medical Pharmacy</h5>
                        <p>We have huge amount of medicine which have benefitted a lot of patients.</p>
                    </li>
                    <li className="col-md-2 col-sm-4 col-xs-12">
                        <div className="icon">
                            <img src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/494/2020/02/10224112/iStock-1173585911.jpg" alt="Pulmonary" />
                        </div>
                        <h5>Pulmonary</h5>
                        <p>We conduct the best pulmonary surgery out there.</p>
                    </li>
                </ul>
                {/* Medical Services List Ends */}
            </section>
            <h5 className='mt-3 text-danger'>We believe in care, affection and the hand of Humanity.</h5>
        </div>
    );
};

export default About;