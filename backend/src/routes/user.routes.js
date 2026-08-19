const express = require('express');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/me', authMiddleware, (req, res) => {
    
        res.status(201).json({
            message : "Authenticated succussfully",
            userId : req.user
            });
    
});



module.exports = router;