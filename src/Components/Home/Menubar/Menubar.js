import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.scss';
import logo from '../../../images/logo/MyWays Logo.png';
import navbarIcon from '../../../images/icon/Instant logo.png';

const Menubar = () => {
    return (
        <>
            <div className="navbar-bg">
                <div className="container">
                    <Navbar expand="lg">
                        <Link to="/home" className="logo ml-3"><img src={logo} alt="" /></Link>
                        <Navbar.Toggle className="navbar-hamburger" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto mt-2">
                                <NavDropdown className="dropdown-btn" title={
                                    <span className="dropdown-title">For You</span>
                                } id="basic-nav-dropdown">
                                    <NavDropdown.Item className="first-item" href="#action/3.1">Find matching internship</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Hire right talent</NavDropdown.Item>
                                    <NavDropdown.Item className="last-item" href="#action/3.3">Work from home</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                <Link className="menu-link" to="/"><img src={navbarIcon} alt="" className="fluid" />Instant Apply</Link>
                                <Link className="menu-link" to="/">Pricing</Link>
                                <Link className="menu-link" to="/">About Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <button className="menu-link sign-up" to="/signUp">Sign Up</button>
                        <button className="menu-link login-btn" to="/login">LOGIN</button>
                    </Navbar>
                </div>
            </div>
        </>
    );
};

export default Menubar;