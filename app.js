const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, function () {
    console.log("Express server listening on port 3000");
    });






app.get('/', (req, res)=>{
    res.send('<h1> Express Demo <h1> <h4> Message: Success</h4><p> version 0.0.1');
})




app.get('/send', (req, res)=>{
    res.send([{id: 001, name: "Leel"},{id: 002, name: "Heshan"},{id: 003, name: "Sahan"}]);
})

