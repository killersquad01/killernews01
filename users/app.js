const express = require('express');
const mongodb = require('./lib/MongoDB');
const userRoutes = require('./routes/users');

const app = express();

mongodb.init();

app.use('/users', userRoutes);

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hi! this is users microservice'
    });
});

const server = app.listen(3000, () => {
    console.log(`**** Users Microservice Up at port: 3000 ****`);
});