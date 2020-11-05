const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/book_store')
.then(()=> console.log ('Connected to Mongodb'))
.catch(err => console.error('Could not connect to Mongodb....', err));

app.use('/api/users', users)

const port = process.env.PORT || 7010
 app.listen(port, () => console.log('Listening on port 7010'));