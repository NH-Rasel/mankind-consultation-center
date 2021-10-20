import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '200px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-warning">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#consultants" className="text-warning">Consultants</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#diagnosisCorner" className="text-warning">Diagnosis Corner</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#pharmacy" className="text-warning">Pharmacy</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#covid-19" className="text-warning">Covid-19</Nav.Link>
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}<i className="far fa-user-circle text-warning ps-3"></i></a>

                        </Navbar.Text>
                        {
                            user?.email ?
                                <i onClick={logOut} className="fas fa-sign-out-alt text-warning ps-3" style={{ cursor: 'pointer' }}></i> :
                                <Nav.Link as={Link} to="/login" className="text-warning">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;