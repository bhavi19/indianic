const usersModel = require("../Models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "USERAPI";

const register = async (req, res) => {
    // console.log("request",req)

    const { email, password, role, gender, name, dateOfBirth } = req.body;
    try {
        const existingUser = await usersModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ mesaage: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const result = await usersModel.create({
            email: email,
            password: hashedPassword,
            role: role,
            gender: gender,
            status: "Active",
            name: name,
            dateOfBirth: dateOfBirth
        })

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY)
        res.status(201).json({ user: result, token: token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })

    }

}

const signin = async (req, res) => {

    const { email, password } = req.body

    try {
        const existingUser = await usersModel.findOne({ email: email })
        if (!existingUser) {
            return res.status(400).json({ mesaage: "User NOT found" })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid password" })
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY)
        res.status(201).json({ user: existingUser, token: token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

const usersAll = async (req, res) => {
    try {
        const allUsers = await usersModel.find({});
        res.status(200).json(allUsers)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

const selectedUser = async (req, res) => {
    const { _id } = req.body
    try {
        const userIdDetails = await usersModel.findOne({ id: _id });
        res.status(200).send({
            userIdDetails: userIdDetails
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

const deleteUser = async (req, res) => {

    const { _id } = req.body

    try {
        const userIdDetails = await usersModel.findOne({ id: _id });

        userIdDetails.status = "Inactive";

        await userIdDetails.save()
        res.status(200).send({
            message: `User deleted Successfully`,
            userIdDetails: userIdDetails
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

const updateUserDetails = async (req, res) => {
    const { _id, email, password, role, gender, status, dateOfBirth, name } = req.body
    try {
        const userIdDetails = await usersModel.findOne({ id: _id });

        userIdDetails.status = "Inactive";

        const result = await usersModel.create({
            email: email,
            role: role,
            gender: gender,
            status: status,
            name: name,
            dateOfBirth: dateOfBirth
        })

        await userIdDetails.save()
        res.status(200).send({
            message: `User deatils updated Successfully`,
            userIdDetails: result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}


module.exports = { register, signin, usersAll, deleteUser, updateUserDetails,selectedUser }