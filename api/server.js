const express = require('express');
const ProductsRouter = require('./products/products-router')

const server = express();
server.use(express.json())

server.use('/products', ProductsRouter);


server.get('/', (req , res) => {
    res.status(200).json({name: 'miguel'})
})



module.exports = server;