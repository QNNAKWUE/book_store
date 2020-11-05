const bcrypt = require('bcrypt');
const { User, validate} = require('../models/users');
const _ = require('lodash');

exports.registerUser = (async(req, res)=>{
    const error = validate(req);
    if(error){
        res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({email: req.body.email});
    if(user) {
        res.status(400).send('User already registered')
    }

     user = new User ({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
     });

     const salt = await bcrypt.genSalt(10);
     user.password = await bcrypt.hash('user.password', salt)

    await user.save();
    return res.json({user});

});

exports.getUsers = (async(req, res)=>{
    const users = await User.find().sort('name');
    if(!users){
        res.status(400).send('Could not get users')
    }
    res.json({users});
});

exports.getUserById = (async(req, res) =>{
    const user = await User.findById(id);
    if(!user){
        res.status(400).send("The user with the given ID was'nt found");
    }
    res.json({user});
});

exports.updateUser = (async(req, res)=>{
    const error = validate(req);
    if(error) {
        res.status(400).send(error.details[0].message);
    }

    const user = await User.findByIdAndUpdate(req.body.id,{name: req.body.name}, {new: true});
    if(!user){
         res.status(400).send("Could not update the given user");
    }
    res.json({user});
});

exports.deleteUser = (async(req, res) =>{
    const user = await User.findByIdAndRemove(req.body._id).sort("name");
    if(!user){
        res.status(400).json({error: 'failed to delete ${user.name}' });
    }
    res.json({message: '${user.name} deleted successfully', deleteUser})
})

