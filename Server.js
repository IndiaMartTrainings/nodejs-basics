const express = require("express")
const app = express()
const cors = require('cors')

const users = require("./data")

app.use(cors())
app.get("/", (req, res)=>{
    res.send("Welcome to the world of expressJS")
})

app.get("/employee", (req, res)=>{
    res.send("End point for Employee data")
})

app.get("/users", (req, res)=>{
    const users = [
        {id: 1, name: "Scott", age: 45, skill: "React"},
        {id: 2, name: "Adam", age: 43, skill: "Anguar"},
        {id: 3, name: "Tuan", age: 42, skill: ".Net"},
        {id: 4, name: "Uma", age: 39, skill: "JavaScript"},
    ]
    res.json(users)
})

app.get("/user-list", (req, res)=>{
    res.json(users)
})
const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})