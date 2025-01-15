import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Viewer',
        dob: '',
    });

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <Modal show={props.show} onHide={props.handleClose} style={{ marginTop: "10%" }}>
            <Modal.Body>
                <div className="container mt-5">
                    <h2>Register</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            {/* Name Field */}
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group as={Col} controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            {/* Password Field */}
                            <Form.Group as={Col} controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            {/* Role Dropdown */}
                            <Form.Group as={Col} controlId="formRole">
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Viewer">Viewer</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>

                        {/* Date of Birth Field */}
                        <Form.Group controlId="formDOB">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default RegisterForm;
