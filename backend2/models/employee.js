const db = require('../db')
const bcrypt = require('bcryptjs');

module.exports = {
    async createEmployee(employee) { 
        const { firstname, secondname, jobposition, email, password } = employee;
        const hashedPassword = await bcrypt.hash(employee.password, 10);
        const sql = 'INSERT INTO employee2 (firstname, secondname, jobposition, email, password) VALUES (?,?,?,?,?)';
        return db.query(sql, [firstname, secondname, jobposition, email, hashedPassword])
        
    },
    async findUserByEmail(email){
        const sql = 'SELECT * FROM employee2 WHERE email = ?';
        const [rows] = await db.promise().query(sql,[email]);
        return rows[0];
    }
}