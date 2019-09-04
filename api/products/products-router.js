const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).json({name: "chicken"})
})

router.get('/name', (req, res) => {
    res.status(200).json({name: "flour"})
})


module.exports = router;