const express = require('express');
const { uploadBook } = require('../books');
const cloudinary = require('../utils/cloudinary');
const multer = require('../utils/multer');
const router = express.Router();

router.post('/', uploadBook);
