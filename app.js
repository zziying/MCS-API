const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongo = require('./mongo');
const courseSchema = require('./schemas/course-schema');
const _ = require("lodash");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// requests targeting all the courses
app.get("/courses", async function(req, res) {
    await mongo().then(async mongoose => {
        try {
            console.log("connected to mongoDB!");
             await courseSchema.find({}).then(result => {
                 res.send(result);
             }).catch(error => {
                return res.status(404).send({error: "No courses was found."});
             })
        } finally {
            mongoose.connection.close();
        }
    })
})

app.get("/courses/:courseNumber([0-9][0-9][0-9])", async function(req, res){
    await mongo().then(async mongoose => {
        try {
            console.log("connected to mongoDB!");
             await courseSchema.find({
                 "number": req.params.courseNumber
             }).then(result => {
                 res.send(result);
             }).catch(error => {
                 return res.status(404).send({error: "No courses matching that number was found."});
             })
        } finally {
            mongoose.connection.close();
        }
    })
});

app.get("/courses/:courseName", async function(req, res) {
    await mongo().then(async mongoose => {
        try {
            console.log("connected to mongoDB!");
            const title = _.startCase(req.params.courseName);
             await courseSchema.find({
                "title": {$regex : `.*${title}.*`}
             }).then(result => {
                 res.send(result);
             }).catch(error => {
                 console.log(error);
                 return res.status(404).send({error: "Courses name doesn't exist."});
             })
        } finally {
            mongoose.connection.close();
        }
    })
})

app.get("/:year", async function(req, res) {
    await mongo().then(async mongoose => {
        try {
            console.log("connected to mongoDB!");
             await courseSchema.find({
                "year": req.params.year
             }).then(result => {
                 res.send(result);
             }).catch(error => {
                 console.log(error);
                 return res.status(404).send({error: "Can't find any course in this year."});
             })
        } finally {
            mongoose.connection.close();
        }
    })
})

app.get("/:year/:term", async function(req, res) {
    await mongo().then(async mongoose => {
        try {
            console.log("connected to mongoDB!");
            const term = _.capitalize(`${req.params.term}`)
             await courseSchema.find({
                "year": req.params.year,
                "term": term
             }).then(result => {
                 res.send(result);
             }).catch(error => {
                 console.log(error);
                 return res.status(404).send({error: "Can't find any course."});
             })
        } finally {
            mongoose.connection.close();
        }
    })
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});