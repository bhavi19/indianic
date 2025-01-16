import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add form submission logic here
    };

    return (
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
                </Row>

                {/* Email Field */}
                <Row>
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
                <Row>
                    <Form.Group as={Col} controlId="formGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                            inline
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                            inline
                        />

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

                <Button variant="primary" style={{ marginTop: "20px" }} type="submit">
                    Register
                </Button>
            </Form>
        </div >
    );
};

export default UserForm;