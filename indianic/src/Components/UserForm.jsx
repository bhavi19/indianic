import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';
import { signup, updateUserDetails } from '../Services';

const UserForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const editData = location.state || {}

    const [formData, setFormData] = useState({
        name: editData.name,
        email: editData.email,
        role: editData.role,
        gender: editData.gender,
        dateOfBirth: editData.dateOfBirth
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
        if (editData.email) {
            try {
                updateUserDetails(editData._id, formData)
                window.alert("User updated successfully.")
                navigate("/dashboard")

            } catch (error) {
                window.alert("Something went wrong")
            }
        } else {

            try {
                signup(formData)
                window.alert("User added successfully.")
                navigate("/dashboard")

            } catch (error) {
                window.alert("Something went wrong")
            }
        }

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
                            disabled={!editData}
                        />
                    </Form.Group>
                </Row>

                {!editData.email && <Row>
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        // disabled={!editData}
                        />
                    </Form.Group>
                </Row>}

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
                            checked={formData.gender == 'Male'}
                            onChange={handleChange}
                            inline
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="Female"
                            checked={formData.gender == 'Female'}
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
                        value={formData.dateOfBirth}
                        onChange={handleChange}

                    />
                </Form.Group>

                {editData.email ? <Button variant="primary" style={{ marginTop: "20px" }} type="submit">
                    Update
                </Button> : <Button variant="primary" style={{ marginTop: "20px" }} type="submit">
                    Save
                </Button>}
                <Button variant="secondary" style={{ marginTop: "20px", marginLeft: "20px" }} onClick={() => navigate("/dashboard")}>
                    Back
                </Button>
            </Form>
        </div >
    );
};

export default UserForm;