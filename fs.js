const fs = require('fs')

fs.rename("users.html", "account.html", (eer)=>{})
fs.writeFile('./users.html','First app using NodeJs' ,
    (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('File is renamed')
        }
    })
fs.appendFile('./users.txt' , 'NodeJs is fun' ,()=>{})
fs.readFile('./account.html' ,'utf8' , (err , data)=>{
    if(err)
        console.log(err)
    else
        console.log(data)
})