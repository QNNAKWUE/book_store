const {Book, Validate} = require('../models/book');
const fs = require('fs');
var cloudinary = require('cloudinary');
const multer = require('multer');

exports.createBook = (async(req, res) =>{
    const error = Validate(req.body);
    if(error){ return res.status(400).send(error.details[0].message)}

    const book = new Book({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author,
        category: req.body.category,
        language: req.body.language,
    });
    await book.save();
    res.send(book);

    exports.uploadBook = (async(req, res)=>{

    });