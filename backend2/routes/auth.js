const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Employee = require('../models/employee');

const db = require('../db')


require('dotenv').config();

const router = express.Router();
const secretKey = process.env.JWT_SECRET;

router.get('/', (req,res)=>{
    let qr = 'SELECT * FROM employee2';
    db.query(qr, (err, results)=>{
        if(err){
            console.log(err)
        }
        if (results.length > 0){
            res.send({
                message: 'All employees data',
                data: results
            })
        }
    })
})

router.post('/register', async(req, res)=>{   
    try{
        await Employee.createEmployee(req.body);
        res.status(201).send({message:'Employee registered successfully!'});
    } catch (err) {
        res.status(500).json({error: 'Registering of employee is failed'});
    }
});

router.post('/login', async(req, res)=>{
    const { email, password } = req.body;
    try {
        const employee = await Employee.findUserByEmail(email);
        if (employee && await bcrypt.compare(password, employee.password)) {
            const token = jwt.sign({ employeeId : employee.employeeid }, secretKey, { expiresIn: '1h'})
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Invalid Credentials of employee'});
        }
    } catch (err) {
        res.status(500).json({ error: 'Error in employee logging'})
    }
});

module.exports = router;