const fs = require('fs')

/*
const path = require('path')
// fs.readfile('./learn.text', 'utf8', function (err,fileData))
// fs.readfile('./learn.text', {encoding :'utf8', flag : 'r', function (err,fileData))
fs.readFile('./learn.txt', function(err,fileData){  
    if(err){
        console.log(err)
    }

    else {
       // console.log(fileData) //buffer result
        console.log(fileData.toString()) // to read file // to read file without using 'tostring' we can use 'utf8' in fs.readfile, before function
    
        
    }
})*/

/*
fs.readFile('./json/user.json', function (err,jsonData){
    if(err){
        console.log(err)
    }

    else{
        console.log(jsonData.toString())
    }
})
*/
/*
// reading throug simple json file
fs.readFile('./json/user.json', function (err,jsonData){

    if(err){
        console.log(err)
    }

    else{
        const user = JSON.parse(jsonData)
        console.table(user)
        console.log(user.designation)
    }
})
*/

//array list of jsonfile
fs.readFile('./json/users.json', function (err,jsonData){
    
    if(err){
        console.log(err)
    }

    else{
        const users =JSON.parse(jsonData)
        for (index = 0; index<users.length; index++)
        console.log(users[index].name)
    }
})




