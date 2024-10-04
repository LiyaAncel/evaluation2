const express = require('express');
const authMiddleware = require('../middleware/auth');
const db = require('../db');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res)=>{
    const employeeId = req.employee.id;
    let sql = 'SELECT *  FROM  employee2 WHERE id = ?';
    try{
        const [employeeDetails] = db.query(sql, [employeeId]);
        res.status(200).json(employeeDetails);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching employee details '});
    }
    });

module.exports = router;