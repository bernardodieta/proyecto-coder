import express from 'express';
import cartRouter from './src/routers/cartRouter.js'
import productRouter from './src/routers/productRouter.js';

const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(cartRouter, productRouter)

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});