const express = require ('express');
const app = express();


app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/home.html');
});
const port = 9000;

app.listen(port,()=>{
console.log('hey we are here');
});