import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header/Header';
import { signin } from '../Services';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(localStorage.getItem('email') ? true : false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            "email": email,
            "password": password,
            "rememberMe": rememberMe
        }

        try {
            signin(payload).then((res) => {
                navigate("/");
            })
        } catch (error) {
            console.log(error)
        }


        // let responseData = await response();
    };

    return (
        <>
            <Header />
            <Form style={{ width: "50%", margin: "auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" checked={rememberMe} label="Remember Me" onChange={(e) => { setRememberMe(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} disabled={!password.length}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Login;