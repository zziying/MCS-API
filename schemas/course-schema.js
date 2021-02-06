const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    year: Number,
    term: String,
    number: Number,
    title: String,
    Aplus: Number,
    A: Number,
    Aminus: Number,
    Bplus: Number,
    B: Number,
    Bminus: Number,
    Cplus: Number,
    C: Number,
    Cminus: Number,
    Dplus: Number,
    D: Number,
    Dminus: Number,
    F: Number,
    W: Number,
    instructor: String
})

module.exports = mongoose.model('courses', courseSchema);