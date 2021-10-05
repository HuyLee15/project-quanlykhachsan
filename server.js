const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

connectDB();

const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server is running on port ${PORT}`));