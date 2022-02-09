const express = require("express")
const app = express()
const router = express.Router()
const cors = require('cors')
const sql = require('mssql')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const dbConfig = {
    user: 'xxx',
    password: '*****',
    server: '*****',
    database: 'StudentDB',
    options: {
        trustServerCertificate: true
    }
}

router.get("/", (req, res) =>{
    res.json("Welcome to Student API - created using SQL Server")
})

router.get("/students", (req, res)=>{
    sql.connect(dbConfig, (err)=>{
        if(err){
            throw err
        }
        const request = new sql.Request();
        const selectQuery ="SELECT * FROM Student"
        request.query(selectQuery, (err, data) =>{
            if(err){
                throw err
            }
            res.json(data.recordset)
        })
    })
})

router.get("/students/:id", (req, res)=>{
    const id = req.params.id
    sql.connect(dbConfig, (err)=>{
        if(err){
            throw err
        }
        const request = new sql.Request();
        const selectByIdQuery =`SELECT * FROM Student WHERE id=${id}`
        request.query(selectByIdQuery, (err, data) =>{
            if(err){
                throw err
            }
            res.json(data.recordset)
        })
    })
})

router.post("/students", (req, res) => {
    const {name, email, city} = req.body
    sql.connect(dbConfig, (err)=>{
        if(err){
            throw err
        }
        const request = new sql.Request();
        const insertQuery =`INSERT INTO Student (name, email, city) VALUES ('${name}','${email}','${city}')`
        request.query(insertQuery, (err, data) =>{
            if(err){
                throw err
            }
            res.json(data)
        })
    })
})

router.put("/students/:id", (req, res) => {
    const id = req.params.id
    const {name, email, city} = req.body
    sql.connect(dbConfig, (err)=>{
        if(err){
            throw err
        }
        const request = new sql.Request();
        const updateQuery =`UPDATE Student SET name ='${name}',email='${email}', city='${city}' WHERE id =${id} `
        request.query(updateQuery, (err, data) =>{
            if(err){
                throw err
            }
            res.json(data)
        })
    })
})

router.delete("/students/:id", (req, res) => {
    const id = req.params.id 
    sql.connect(dbConfig, (err)=>{
        if(err){
            throw err
        }
        const request = new sql.Request();
        const deleteQuery =`DELETE FROM Student WHERE id= ${id}`
        request.query(deleteQuery, (err, data) =>{
            if(err){
                throw err
            }
            res.json(data)
        })
    })
})

app.use("/api",router)

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server Listening at PORT ${PORT}`)
})