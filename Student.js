const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")

const Student = require("./models/studentModel")

mongoose.connect("mongodb://localhost:27017/studentdb", (err) =>{
    if(err){
        throw err
    } else {
        console.log(`Connected to mongodb sucessfully`)
    }
})


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.json("Welcome to the Student API")
})

app.get("/students", (req, res) => {
    Student.getStudents(function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

app.get("/students/:id", (req, res) => {
    const studentId = req.params.id
    Student.getStudentById(studentId, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

app.post("/students", (req, res) => {

    const student =  req.body
    Student.addStudent(student, (err, data) => {
        if(err){
            throw err
        }
        res.json(data)
    })
})

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})