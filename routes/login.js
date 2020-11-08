const express = require('express');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const {User} = require('../models/users');
const router = express.Router()


router.post( '/', async (req, res) =>{
    const error = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Invalid email/password");
    

    const validPassword =   bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Password is invalid");
    
    const token = user.generateAuthToken
    res.send(token);

});


    function validate(req){
        const schema = {
            email: Joi.string().min(5).max(50).required().email(),
            password: Joi.string().required().min(5).max(200).required()
        }
    }
   

module.exports = router;


