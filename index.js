const config = require('config');
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//const users = require('./routes/users');
//const login = require('./routes/login');
//const category = require('./routes/category');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// if(!config.get('jwtPrivateKey')){
//     console.log('FATAL ERROR: jwtPrivateKey is not defined');
//     process.exit(1);
// }

// mongoose.connect('mongodb://localhost/book_store')
// .then(()=> console.log ('Connected to Mongodb'))
// .catch(err => console.error('Could not connect to Mongodb....', err));

// app.use('/api/users', users);
// app.use('/api/login', login);
// app.use('/api/category', category);

const port = process.env.PORT || 7010
 app.listen(port, () => console.log('Listening on port 7010'));