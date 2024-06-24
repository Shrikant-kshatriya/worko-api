const express = require('express');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
var cookieParser = require('cookie-parser');
const db = require('./dbconfig');

// database connect
db();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/worko/user', userRoutes);
app.use('/worko/auth', authRoutes);

const server = app.listen(3000, () => console.log('listening on port 3000'));
module.exports = server;