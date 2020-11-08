const Joi = require('joi');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32,
    }
    
});

const Category = mongoose.model('Category', categorySchema);
const category = new Category({});

function validateCategory(req) {
    const schema = {
        name: Joi.string().min(3).max(32).required()
    }
}

module.exports.Category = Category;
module.exports.validate = validateCategory;
