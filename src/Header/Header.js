import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css'


const Header = () => {
    const element2 = <FontAwesomeIcon icon={faUser} />
    const { user, logOut } = useAuth();
    return (
        <div>

            {/* Navbar Section */}
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Angel-Aid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Link to="/home" className="my-hover text-white text-decoration-none">Home</Link>
                            <Link to="/services" className="my-hover text-white text-decoration-none">Services</Link>
                            <Link to="/about" className="my-hover text-white text-decoration-none">About Us</Link>
                            <Link to="/book-an-appointment" className="my-hover text-white text-decoration-none">Book an Appointment</Link>
                        </Nav>
                        <Nav>
                            {
                                user.name ?
                                    <div className='d-flex align-items-center'>
                                        <img src='http://sanjaymotels.com/wp-content/uploads/2019/01/testimony.png' alt="" width='35px' height='35px' />
                                        <h3 className='text-light small mt-2 me-3 ms-3'>{user.name}</h3>
                                        <button className="btn-warning me-3 ps-3 pe-3 pt-1 pb-1 border-0 rounded-2" onClick={logOut}>Sign Out</button>
                                    </div> :
                                    <Link to="/sign-up" className="my-hover text-white text-decoration-none">
                                        {element2} Register
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;