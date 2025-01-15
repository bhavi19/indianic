import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header/Header';



const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('isAdmin', true);
        // console.log({ email, password, rememberMe });
        navigate("/dashboard");

    };

    return (
        <>
            <Header />
            <Form style={{ width: "50%", margin: "auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Login;