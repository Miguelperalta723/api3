const express = require('express');

const server = express();
server.use(express.json())




server.get('/', (req , res) => {
    res.status(200).json({name: 'miguel'})
})



module.exports = server;