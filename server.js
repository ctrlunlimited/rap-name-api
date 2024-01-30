//links your server.js file to express
const express = require('express')

// anywhere you see app, it is calling express
const app = express()
const PORT = 8000

//creates a 21 savage object
const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    'chance the Rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'illinois, Chicago'
        },

    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
            }
}

//enables you to listen to a request and generate a response
//where '/' is the main path, __dirName tells you were to look for html file
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

// enables you to send json instead of sendfile
app.get('/api/:rapperName',(request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers[dylan])
    }
    //response.json(rappers)
})

//tells your server what to listen for

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is running on ${PORT} you better go catch it`)
})