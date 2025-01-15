import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    const handleLogout = () => {
        localStorage.setItem("isLoggedIn", false);
        setIsLoggedIn(false);
        navigate("/home");
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Indianic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey="/"
                        className="me-auto">
                        {isLoggedIn && <Nav.Link href="/dashboard" activeClassName="active">Dashboard</Nav.Link>}
                        <div style={{ display: 'flex', paddingLeft: '1050px' }}>
                            {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
                            {isLoggedIn && <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;