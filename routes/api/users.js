const express = require('express');
const router = express.Router();
const User = require('../../models/User');

//Define API routes here
router.get('', (req, res) => {
    res.send("Hello World!")
})

module.exports = router