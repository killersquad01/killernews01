const mongoose = require('mongoose');

/**
 * MongoDb connector
 */
module.exports = {
    init() {
        mongoose.connect(
            `mongodb://192.168.1.6:27022/users_microservice`,
            { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
            error => {
                if (error) {
                    console.log('Error on connecting to MongoDB');
                } else {
                    console.log('**** Connected to MongoDB ****');
                }
            },
        );
    },
};
