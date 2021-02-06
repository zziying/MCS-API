const request = require("request");
const csv = require("csvtojson");
const mongo = require('./mongo');
const courseSchema = require('./schemas/course-schema');

const csvUrl = "https://raw.githubusercontent.com/wadefagen/datasets/master/gpa/uiuc-gpa-dataset.csv";

csv()
.fromStream(request.get(csvUrl))
.subscribe((json)=>{
    return new Promise((resolve,reject)=>{
        resolve(json);
    })
}).then((jsonData) => {
    let csCoursesList = jsonData.filter(function(course) {
        return course.Subject == "CS";
    })
    return csCoursesList;
}).then(courses => {
    // put courses into database
    // formalize data into database acceptable form
    let courseList = [];
    courses.forEach((course) => {
        courseList.push({
            year: course.Year,
            term: course.Term,
            number: course.Number,
            title: course['Course Title'],
            Aplus : course['A+'],
            A: course.A,
            Aminus: course['A-'],
            Bplus: course['B+'],
            B: course.B,
            Bminus: course['B-'],
            Cplus: course['C+'],
            C: course.C,
            Cminus: course['C-'],
            Dplus: course['D+'],
            D: course['D'],
            Dminus: course['D-'],
            F: course.D,
            W: course.W,
            instructor: course['Primary Instructor']
        })
    });

    const connectToMongoDB = async () => {
        await mongo().then(async mongoose => {
            try {
                console.log("connected to mongoDB!");
                await courseSchema.insertMany(courseList);
            } finally {
                mongoose.connection.close();
            }
        })
    };
    
    connectToMongoDB();
});