const express = require('express');
const { ValidationError } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 50
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    author: {
        type: String,
        required: true,
       maxlength: 25,

    },

    category:{
        type: String,
        required: true,
        unique: true,
    },

    language:{
        type: String,
        required: true,
        trim: true,
    },

    pdf: String,
});

const Book = mongoose.model('Book', bookSchema);
const book = new Book({ });

function validate(req){
    const schema = {
        name: Joi.string().required().unique().maxlength(50),
        description: Joi.string().required(),
        author: Joi.string().required().maxlength(25),
        category: Joi.string().required().unique(true),
        language: Joi.string().required(),
    }
}

module.exports.Book = Book;
module.exports.Validate = Validate;