const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

module.exports = (req, res, next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({error: 'Acccess denied'});
    try{
        const verified = jwt.verify(token,secretKey);
        req.employee = verified;
        next();
    }catch (err){
        res.status(401).json({error:'Invalid token'})
    }
}




