import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-area">
                    {/* <!-- Nested Container Starts --> */}
                    <div class="container">
                        <div class="row">
                            {/* <!-- Hosptial Information Starts --> */}
                            <div class="col-md-3 col-sm-4 col-xs-12">
                                <h4>Angel-Aid Information</h4>
                                <p>
                                    We are the very best you will ever find out there. Committed to give quality services and health care.
                                </p>
                                <ul class="list-unstyled address-list">
                                    <li class="clearfix address">
                                        <i class="fa fa-home"></i> Shilparamam Lonsdale St. Marks Road, Talay Victoria 8011 London.
                                    </li>
                                    <li class="clearfix">
                                        <i class="fa fa-fax"></i> 001 - 785 987 1234
                                    </li>
                                    <li class="clearfix">
                                        <i class="fa fa-phone"></i> 001 - 123 478 5987
                                    </li>
                                    <li class="clearfix">
                                        <i class="fa fa-envelope"></i>
                                        <a href="mailto:info@yourhospitalsite.com">info@yourhospitalsite.com</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Hosptial Information Ends --> */}
                            {/* <!-- Services Starts --> */}
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <h4>Services</h4>
                                <ul class="list-unstyled">
                                    <li><a href="#"> Pediatric Clinic</a></li>
                                    <li><a href="#"> Diagnosis Clinic</a></li>
                                    <li><a href="#"> Cardiac Clinic</a></li>
                                    <li><a href="#"> Laboratory Analysis</a></li>
                                    <li><a href="#"> Dental Clinic</a></li>
                                    <li><a href="#"> Gynecological Clinic</a></li>
                                    <li><a href="#"> Psychological</a></li>
                                </ul>
                            </div>
                            {/* <!-- Services Ends --> */}
                            {/* <!-- Twitter Starts --> */}
                            <div class="col-md-3 col-sm-4 col-xs-12">
                                <h4 className='text-center'>Twitter</h4>
                                <ul class="list-unstyled tweets-list">
                                    <li>
                                        Our Hospitals Website Launched.
                                        <a href="#">http://t.co/xyz12abc</a>
                                    </li>
                                    <li>
                                        Our Hospitals Twitter Page, please follow.
                                        <a href="#">http://t.co/testlink</a>
                                    </li>
                                    <li>
                                        Our Hospitals Facebook Page, please like.
                                        <a href="#">http://t.co/abc123link</a>
                                    </li>
                                    <li>
                                        Our Hospitals Broucher Launched.
                                        <a href="#">http://t.co/xyz-test1</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Twitter Ends -->
                        <!-- Signup Newsletter Starts --> */}
                            <div class="col-md-4 col-xs-12 newsletter-block">
                                <h4>Signup Newsletter</h4>
                                <form action="#" class="newsletter">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Enter your Email Address" />
                                    </div>
                                    <button type="submit" class="btn btn-lg btn-block btn-secondary">Submit</button>
                                </form>
                            </div>
                            {/* <!-- Signup Newsletter Ends --> */}
                        </div>
                    </div>
                    {/* <!-- Nested Container Ends --> */}
                </div>
                {/* <!-- Footer Area Ends -->
            <!-- Copyright Starts --> */}
                <div class="copyright">
                    <div class="container clearfix">
                        <p class="pull-left">
                            &copy; Copyright 2015. AlL Rights Reserved By <span>Hosptials</span>
                        </p>
                        <ul class="list-unstyled list-inline pull-right">
                            <li><a href="#">Terms Of Services</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Copyright Ends --> */}
            </footer>
        </div >
    );
};

export default Footer;