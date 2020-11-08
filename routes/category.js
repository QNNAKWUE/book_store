const express = require('express');
const {category, createCategory} = require('../controllers/category');
const router = express.Router();

router.post('/create-category', createCategory);

module.exports = router;

