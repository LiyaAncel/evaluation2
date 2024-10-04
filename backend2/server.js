const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();

const employeeAuthRoutes = require('./routes/auth');
const employeeDetailRoutes = require('./routes/employees');

require('./db')

const app = express();

app.use(bodyParser.json())

app.use(cors());

app.use('/api/employee', employeeAuthRoutes);
app.use('/api/emp', employeeDetailRoutes);


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is up on port ${PORT}`)
})