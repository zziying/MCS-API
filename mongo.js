const mongoose = require('mongoose');
const {password} = require('./config.json');
const mongoPath = 
`mongodb+srv://mcs-api-admin:${password}@cluster0.3xugl.mongodb.net/mcsDB?retryWrites=true&w=majority`;

module.exports = async() => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose;
}