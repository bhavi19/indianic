import React, { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header/Header';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            "email": email,
            "password": password
        }

        let response = () => {
            try {
                return new Promise(function (resolve, reject) {
                    axios({
                        method: 'post',
                        url: 'http://localhost:4000/users/signin',
                        data: payload,
                    }).then(response => {
                        resolve(response);
                        localStorage.setItem('isLoggedIn', true);
                        localStorage.setItem('isAdmin', true);
                        navigate("/dashboard");
                    });
                });
            } catch (error) {
                console.log(error.message)
                window.alert(error.message)
            }
        };

        let responseData = await response();
        console.log("response", responseData.data);
    };

    return (
        <>
            <Header />
            <Form style={{ width: "50%", margin: "auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Login;