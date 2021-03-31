const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hi! this is users microservice'
    });
});

const server = app.listen(3000, () => {
    console.log(`**** Users Microservice Up at port: 3000 ****`);
});