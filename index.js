var express = require('express');
var app  = express();
var port = process.env.PORT || 3200;
var cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.get('/', async (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port,()=>{
    console.log(`App is running on ${port}`)
});