import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '200px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#consultants">Consultants</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#diagnosisCorner">Diagnosis Corner</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#pharmacy">Pharmacy</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#covid-19">Covid-19</Nav.Link>
                        {
                            user?.email ?
                                <button onClick={logOut}>Logout</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;