const express = require('express');
//const { User} = require('../models/users');
const {registerUser,
       getUsers,
       getUserById,
       deleteUser
    } = require('../controllers/users');

const router = express.Router();

router.post('/register-user', registerUser);
router.get('/get-users', getUsers);
router.get('/update-user', getUserById);
router.delete('/delete-user', deleteUser);

module.exports = router;