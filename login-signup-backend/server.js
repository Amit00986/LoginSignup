require('dotenv').config();
const express = require('express');

const cors = require("cors");

const DbConnect = require('./src/apis/db/index');

const router = require('./src/apis/Routes');

const app = express();

app.use(cors());

DbConnect();

app.use(express.json());

app.use('/', router);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Running on ${process.env.PORT}`); // here server is started 
});
