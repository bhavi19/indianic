const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email id already in use"],
    },
    name: {
        type: String,
        required: [true, "Please provide a name!"],
        unique: false,
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    role: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Users', usersSchema)