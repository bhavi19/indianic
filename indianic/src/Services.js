// src/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/users';

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

// You can add common headers or auth tokens here


export const signin = async () => {
    try {
        const response = await instance.post('/signin');
        let AUTH_TOKEN = response.token
        sessionStorage.setItem("token", AUTH_TOKEN)
        instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here or throw them to be handled where the function is called
        throw error;
    }
};


export const fetchUsers = async () => {
    console.log(instance)
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
    console.log(instance)
    try {
        const response = await instance.put(`updateStatus/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here or throw them to be handled where the function is called
        throw error;
    }
};

export const updateUserDetails = async (id) => {
    console.log(instance)
    try {
        const response = await instance.put(`updateUser/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here or throw them to be handled where the function is called
        throw error;
    }
};