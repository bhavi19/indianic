// src/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/users';

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

// You can add common headers or auth tokens here


export const signin = async (payload) => {
    try {
        const response = await instance.post('/signin', payload);

        let AUTH_TOKEN = response.data.token
        sessionStorage.setItem("token", AUTH_TOKEN)
        if (AUTH_TOKEN) {
            localStorage.setItem('token', AUTH_TOKEN);
            payload.rememberMe == 'on' && localStorage.setItem('email', payload.email);
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("isAdmin", response.data.role === "Admin" || response.data.role === "admin")
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here or throw them to be handled where the function is called
        throw error;
    }
};


export const fetchUsers = async () => {
    try {
        const response = await instance.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here or throw them to be handled where the function is called
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await instance.put(`updateStatus/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here or throw them to be handled where the function is called
        throw error;
    }
};

export const updateUserDetails = async (id, payload) => {
    try {
        const response = await instance.put(`updateUser/${id}`, payload);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here or throw them to be handled where the function is called
        throw error;
    }
};