const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hi! this is news microservice'
    });
});

const server = app.listen(4000, () => {
    console.log(`**** News Microservice Up at port: 4000 ****`);
});