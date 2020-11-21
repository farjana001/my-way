import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import './DropDownBtn.css'

const DropDownBtn = () => {
    return (
        <div style={{marginLeft: '40%'}} className="mt-5">
            <NavDropdown className="dropdown-btn" title={
                <span className="dropdown-title">For You</span>
            } id="basic-nav-dropdown">
                <div className="arrow-up"></div>
                <NavDropdown.Item className="first-item" href="#action/3.1">Find matching internship</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Hire right talent</NavDropdown.Item>
                <NavDropdown.Item className="last-item" href="#action/3.3">Work from home</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
        </div>
    );
};

export default DropDownBtn;