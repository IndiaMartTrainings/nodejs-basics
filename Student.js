const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = express.Router()
const Student = require('./models/studentModel')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/studentdb", (err)=>{
    if(err){
        throw err
    } else {
        console.log('Connected to mongodb successfully')
    }
})


router.get("/", (req, res)=>{
    res.json("This is a Student API")
})

router.get("/students", (req, res) =>{
    Student.getStudents((err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.get("/students/:id", (req, res) => {
    const studentId = req.params.id

    Student.getStudentById(studentId, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.post("/students", (req, res) => {
    const student = req.body

    Student.addStudent(student, (err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.post("/student-list", (req, res) => {
    const student = req.body
    Student.addMultipleStudents(student, (err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/students/:id", (req, res)=>{
    const studentId = req.params.id
    const student = req.body

    Student.updateStudent(studentId, student, (err, data) => {
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.delete("/students/:id", (req, res)=>{
    const studentId = req.params.id

    Student.deleteStudent(studentId, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

app.use("/api" , router)

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})
