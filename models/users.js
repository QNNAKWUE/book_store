const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlenthg: 30

    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 50
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200
    },
});

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);
const user = new User({});

function validateUser(req){
    const schema = {
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().required().min(5).max(200).required()
    };
    // return Joi.validateUser(req, schema); 
}

module.exports.User = User;
module.exports.validate = validateUser;