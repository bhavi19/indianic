const express = require('express');
const { register, signin, usersAll, deleteUser, updateUserDetails, selectedUser } = require('../Controllers/Users');
const router = express.Router();

router.post('/register', register);
router.post('/signin', signin);
router.get('/users', usersAll)
router.put('/updateStatus/:id', deleteUser)
router.put('/updateUser/:id', updateUserDetails)
router.put('/user/:id', selectedUser)

module.exports = router;