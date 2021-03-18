const express = require('express');
const { ValidationError } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    name:{
        type: String
    },

    cloudinary_id:{
        type: String,
    }

    });

    const Uploads = mongoose.model('Uploads', uploadSchema);
    const uploads = new Uploads({});

    module.exports.Uploads = Uploads;

