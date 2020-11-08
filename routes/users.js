const express = require('express');
const {registerUser,
       getUsers,
       getUserById,
       deleteUser
    } = require('../controllers/users');
const { signIn } = require('./login');

const router = express.Router();

router.post('/register-user', registerUser);
//router.post('sign-in', signIn);
router.get('/get-users', getUsers);
router.get('/update-user', getUserById);
router.delete('/delete-user', deleteUser);

module.exports = router;