const express = require('express')

const app = express()
 app.listen(3829 , ()=>{console.log('Server is Running')})

app.get('/ziad' , (req , res)=>{
   res.send('Hello I am Ziad')
})
app.get('/hend' , (req , res)=>{
   res.send('Hello I am Hend')
})
app.get('/hemmx' , (req , res)=>{
    const sql = 'SELECT* FROM `games`;'
    con.query(sql , (err , data)=>{
    res.json(data)
    console.log(data)
    })
})

const mysql = require('mysql')

const db = {'host':'localhost' , 'database':'roblox' , 'user':'root' , 'password':''}
const con = mysql.createConnection(db)

con.connect((err)=>{
    if(err)
        console.log(err)
    else
        console.log('DB is connected :)')
})
app.get('/data' , (req , res)=>{
    const sql = 'SELECT* FROM `games`;'
    con.query(sql , (err , data)=>{
        res.json(data)
        console.log(data)
    })
})