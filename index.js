const express = require('express');
const webapp = express();
const cowsay = require('cowsay');
var myCow = cowsay.think({

    text:"¿Ganará Messi algún titulo con Argentina?",
    e: "M M",
    T: ">",
    f: 'wizard',
    s: true,

});


webapp.get('/', function(req,res){

    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    res.send(`<body><pre style="font-size:200%;">${myCow}</pre></body>`);

});

webapp.listen(6060, () => {
    
    console.log("server running...");

});

