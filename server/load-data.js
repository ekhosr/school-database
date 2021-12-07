const Fakerator = require("fakerator");
const mongoose = require("mongoose");
require("dotenv").config();
const fakerator = Fakerator("en-US");
const teacherModel = require("./models/teacher");
const studentModel = require("./models/students");

mongoose
	.connect(process.env.ATLAS_DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(db => {
		console.log('successfull database connection')
	})
	.catch(err => {
		console.log('Database Connection erorr', err)
	})

const teachersCount = 15;
const studentsCount = 100;

(() => {
    const subjectsList = ["Physics", "Maths", "English", "Biology", "Computer Science"];
    const educationList = ["BS Physics", "MS Computer Science", "BS Mathematics", "MS Biology"];

    const teachers = [];
    const students = [];

    for (let i = 1; i <= teachersCount; i++) {
        const name = fakerator.names.name();
        const email = name.split(" ").map(s => s.toLowerCase()).join("") + "@example.com";
        const education = educationList[Math.floor(Math.random() * educationList.length)];
        const teacherId = i;
        const password = "test"
        teachers.push({
            teacherId,
            name,
            email,
            education,
            password
        })
    }

    for (let i = 1; i <= studentsCount; i++) {
        const name = fakerator.names.name();
        const listIndex = Math.floor(Math.random() * (subjectsList.length - 1));
        const subjects = [
            subjectsList[listIndex],
            subjectsList[listIndex + 1]
        ];
        const teacherId = Math.ceil(Math.random() * teachersCount);
        students.push({
            name,
            teacherId,
            subjects
        });
    }

    teacherModel.insertMany(teachers);
    studentModel.insertMany(students);

})()