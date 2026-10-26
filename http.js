const http = require('http')

http.createServer((req , res)=>{

    if(req.url == '/home')
        res.end('Not Found')

    else if(req.url == '/house')
        res.end('Is Found')
    else
        res.end('Error 404')
}).listen(3829 , ()=>{console.log('Server is running')})

const mysql = require('mysql')

const db = {'host':'localhost' , 'database':'roblox' , 'user':'root' , 'password':''}
const con = mysql.createConnection(db)

con.connect((err)=>{
    if(err)
        console.log(err)
    else
        console.log('DB is connected :)')
})